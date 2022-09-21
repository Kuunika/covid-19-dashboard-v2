import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import Map, { FillLayer, Layer, Popup, Source } from "react-map-gl";
import mapData from "../../fixtures/features.json";
import { Point } from "../../interfaces";
import ControlPanel from "./mapComponts/control-panel";
import MapLayer from "./mapComponts/mapLayer";

export default function MapContainer() {
  const [currentCoordinates, setCurrentCoordinates] = useState<Point>({
    latitude: 0,
    longitude: 0,
  });
  const districtLayers = mapData.features.map((district) => {
    return (
      <MapLayer
        lngLtd={currentCoordinates}
        key={district.id}
        district={district}
      />
    );
  });
  return (
    <Paper>
      <Map
        onMouseMove={(event) =>
          setCurrentCoordinates({
            latitude: event.lngLat.lat,
            longitude: event.lngLat.lng,
          })
        }
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
