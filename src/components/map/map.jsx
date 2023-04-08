import React, { useContext, useEffect, useState } from "react";
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
    fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
  }),
};

const extendMap = [11013447.6518, 7085566.549, 18614341.9101, 14052497.1404];
// const source = new GeoTIFF({
//   sources: [
//     {
//       url: "https://os.zhdk.cloud.switch.ch/envicloud/chelsa/chelsa_V2/GLOBAL/climatologies/2041-2070/MRI-ESM2-0/ssp126/tas/CHELSA_mri-esm2-0_r1i1p1f1_w5e5_ssp126_tas_01_2041_2070_norm.tif",
//     },
//   ],
// });

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
    console.log(one);
  }
};

let completedQueries = 0;

const MapOL = () => {
  const map = useContext(MapContext);
  const [center, setCenter] = useState([-94.9065, 38.9884]);
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
  return (
    <div>
      <Map
        center={[14443110.8354, 8867208.2019]}
        zoom={zoom}
        extent={extendMap}
      >
        <Layers>
          {/* <TileLayer source={source} zIndex={5} opacity={1} /> */}

          <TileLayer source={new osm()} />
          {is_end ? (
            <VectorLayer source={one} style={styles.MultiPolygon} zIndex={3} />
          ) : (
            ""
          )}
          {/*  */}
        </Layers>

        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default MapOL;
