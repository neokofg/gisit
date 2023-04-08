import {
  YMaps,
  Map,
  Placemark,
  TypeSelector,
  GeoObject,
} from "@pbe/react-yandex-maps";
const YaMap = () => {
  return (
    <YMaps>
      <div style={{ width: "100%", height: "100%" }}>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 8,
            type: "yandex#satellite",
          }}
          modules={["control.ZoomControl"]}
          options={{
            copyrightLogoVisible: false,
            copyrightProvidersVisible: false,
            copyrightUaVisible: false,
          }}
          height={"100%"}
          width={"100%"}
        >
          {/* <Placemark defaultGeometry={[55.751574, 37.573856]} /> */}
          <TypeSelector options={{ float: "right" }} />
          <GeoObject
            geometry={{
              type: "Point",
              coordinates: [[55.76, 37.64]],
            }}
            options={{
              geodesic: true,
              strokeWidth: 5,
              strokeColor: "#F008",
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
