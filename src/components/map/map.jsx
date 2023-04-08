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
const MapOL = () => {
  const { data } = useQuery(GETREGION);
  const map = useContext(MapContext);
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(4);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
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

          {/* <VectorLayer source={GJSON} style={styles.MultiPolygon} zIndex={3} /> */}
        </Layers>

        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default MapOL;
