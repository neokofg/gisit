import React, { useContext, useEffect, useState, useReducer } from "react";
import Map from "./ol";
import Layers from "./layers";
import TileLayer from "./layers/tile";
import VectorLayer from "./layers/vector";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import osm from "ol/source/OSM";
import GeoTIFF from "ol/source/GeoTIFF.js";
import Controls from "./controls";
import FullScreenControl from "./controls/fullscreen";
import MapContext from "./context";
import { gql, useQuery } from "@apollo/client";
import { useAppSelector } from "@/hooks";
const GETREGION = gql`
  query Query($getRegionId: Int!) {
    getRegion(id: $getRegionId) {
      district
      coordinates
    }
  }
`;

let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({ color: "Blues", width: 1 }),
    fill: new Fill({ color: "rgba(0, 0, 255, 0)" }),
  }),
};

const extendMap = [11013447.6518, 7085566.549, 18614341.9101, 14052497.1404];

const one = {
  type: "FeatureCollection",
  features: [],
};

let variables = {};
let is_end = false;

// Use a callback to be notified when all queries are completed
const onAllQueriesCompleted = () => {
  for (let k = 0; k < 36; k++) {
    const ans = {
      type: "Feature",
      properties: { district: variables["j" + k]?.getRegion?.district },
      geometry: {
        type: "Polygon",
        coordinates: [JSON.parse(variables["j" + k]?.getRegion?.coordinates)],
      },
    };
    one.features.push(ans);
  }
};

let completedQueries = 0;

const MapOL = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const GeoTIFFType = useAppSelector((state) => state.map.activeGeoTIFF);
  const tas = new GeoTIFF({
    sources: [
      {
        url: "/tas1.tif",
      },
    ],
  });
  const pr = new GeoTIFF({
    sources: [
      {
        url: "/pr3.tif",
      },
    ],
  });
  const bio = new GeoTIFF({
    sources: [
      {
        uri: "/https://getlet.ru/maps/bio.tif",
      },
    ],
  });
  const [zoom, setZoom] = useState(4);
  for (let u = 0; u < 36; u++) {
    useQuery(GETREGION, {
      variables: {
        getRegionId: u + 1,
      },
      onCompleted: (data) => {
        variables["j" + u] = data;

        // Check if all queries are completed
        completedQueries++;
        if (completedQueries === 36) {
          is_end = true;
          onAllQueriesCompleted();
        }
      },
    });
  }
  useEffect(() => {
    forceUpdate();
  }, [GeoTIFFType]);
  return (
    <div>
      {
        <Map
          center={[14443110.8354, 8867208.2019]}
          zoom={zoom}
          extent={extendMap}
        >
          <Layers>
            <TileLayer
              source={
                GeoTIFFType === "tas" ? tas : GeoTIFFType === "pr" ? pr : bio
              }
              zIndex={5}
              opacity={0.8}
            />

            <TileLayer source={new osm()} />
            {is_end ? (
              <VectorLayer
                source={one}
                style={styles.MultiPolygon}
                zIndex={8}
              />
            ) : (
              ""
            )}
          </Layers>

          <Controls>
            <FullScreenControl />
          </Controls>
        </Map>
      }
    </div>
  );
};

export default MapOL;
