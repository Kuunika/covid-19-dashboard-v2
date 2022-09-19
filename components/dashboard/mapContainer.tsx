import { Paper, Typography } from "@mui/material";
import Map, { FillLayer, Layer, Popup, Source } from "react-map-gl";
import mapData from "../../fixtures/features.json";
import MapLayer from "./mapComponts/mapLayer";

const districtLayers = mapData.features.map((district) => {
  const showPopUp = true;

  return <MapLayer district={district} />;
  // return (
  //   //@ts-ignore
  //   <Source id={district.id} type="geojson" data={featureCollection}>
  //     <Layer {...dataLayer} />
  //     {showPopUp && (
  //       <Popup
  //         longitude={district.geometry.coordinates[0][0][0]}
  //         latitude={district.geometry.coordinates[0][0][1]}
  //       >
  //         cool popup
  //       </Popup>
  //     )}
  //   </Source>
  // );
});

export default function MapContainer() {
  return (
    <Paper>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
        interactiveLayerIds={["data"]}
        initialViewState={{
          longitude: 34.3015278,
          latitude: -13.2512161,
          zoom: 6,
        }}
        style={{ width: "100%", height: 700 }}
        mapStyle="mapbox://styles/mapbox/light-v9"
      >
        {districtLayers}
      </Map>
    </Paper>
  );
}
