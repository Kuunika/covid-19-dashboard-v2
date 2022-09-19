import { Paper, Typography } from "@mui/material";
import Map, { FillLayer, Layer, Source } from "react-map-gl";
import mapData from "../../fixtures/features.json";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const districtLayers = mapData.features.map((district) => {
  const dataLayer: FillLayer = {
    id: district.id,
    type: "fill",
    source: "mapbox",
    paint: {
      "fill-color": `${getRandomColor()}`,
    },
  };

  const featureCollection = {
    type: "FeatureCollection",
    features: [district],
  };
  return (
    //@ts-ignore
    <Source id={district.id} type="geojson" data={featureCollection}>
      <Layer {...dataLayer} />
    </Source>
  );
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
