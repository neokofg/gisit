import { useContext, useEffect } from "react";
import MapContext from "../context";
import OLVectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Style, Fill, Stroke, Text } from "ol/style";
function styleFunc(feature, resolution) {
  return new Style({
    fill: new Fill({
      color: "rgba(29,123,243,0)",
    }),
    stroke: new Stroke({
      color: "white",
      width: 1,
    }),
    text: new Text({
      text: feature.values_.district,
      textBaseline: "baseline",
      textAlign: "center",
      fill: new Fill({ color: "red" }),
      font: "400 20px",
    }),
  });
}

const VectorLayer = ({ source, style, zIndex = 0 }) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({
      zIndex: 10,
      source: new VectorSource({
        features: new GeoJSON().readFeatures(source, {
          featureProjection: "EPSG:4326",
          dataProjection: "EPSG:4326",
        }),
      }),
      style: styleFunc,
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    console.log("hey");
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
        console.log("?");
      }
    };
  }, [map]);
  return null;
};
export default VectorLayer;
