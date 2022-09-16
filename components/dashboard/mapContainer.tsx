import { Paper, Typography } from "@mui/material";
import Map from "react-map-gl";

export default function MapContainer() {
  return (
    <Paper>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 34.3015278,
          latitude: -13.2512161,
          zoom: 6,
        }}
        style={{ width: "100%", height: 700 }}
        mapStyle="mapbox://styles/caspater/ck0c6hddx02t51cnpltamhgt1"
      />
    </Paper>
  );
}
