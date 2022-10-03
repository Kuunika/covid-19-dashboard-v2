import { Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Map, { FillLayer, Layer, Popup, Source } from "react-map-gl";
import {
  TabSelectionContext,
  TabSelectionType,
} from "../../contexts/tabSelection";
import mapData from "../../fixtures/features.json";
import { Point } from "../../interfaces";
import ControlPanel from "./mapComponents/control-panel";
import MapLayer from "./mapComponents/mapLayer";

export default function MapContainer() {
  const { color, activeTab, scale, legend } = useContext(
    TabSelectionContext
  ) as TabSelectionType;
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
    <Paper
      sx={{
        position: "relative",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
      }}
    >
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
        <ControlPanel color={color} legend={legend} />
      </Map>
    </Paper>
  );
}
