import { useContext, useEffect } from "react";
import MapContext from "../context";
import OLTileLayer from "ol/layer/WebGLTile";

const TileLayer = ({ source, zIndex = 0, opacity, style }) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let tileLayer = new OLTileLayer({
      source,
      zIndex,
      opacity,
      style,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);
  return null;
};
export default TileLayer;
