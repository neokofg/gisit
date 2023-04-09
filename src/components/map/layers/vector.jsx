import { useContext, useEffect } from "react";
import MapContext from "../context";
import OLVectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Style, Fill, Stroke, Text } from "ol/style";
const labelStyle = new Style({
  text: new Text({
    font: "14px Manrope,sans-serif",
    fill: new Fill({
      color: "#000",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 4,
    }),
  }),
});
const countryStyle = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.1)",
  }),
  stroke: new Stroke({
    color: "#319FD3",
    width: 1,
  }),
});
const style = [countryStyle, labelStyle];

function styleFunc(feature) {
  labelStyle.getText().setText(feature.values_.district);
  return style;
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

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);
  return null;
};
export default VectorLayer;
