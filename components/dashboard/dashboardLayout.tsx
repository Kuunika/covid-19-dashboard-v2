import { Grid } from "@mui/material";
import LeftDashDataCells from "./leftDashDataCells";
import MapContainer from "./mapContainer";
import RightDashDataCells from "./rightDashDataCells";

export default function DashboardLayout() {
  return (
    <Grid
      sx={{ marginTop: 10, mx: 2 }}
      container
      spacing={2}
      justifyContent="center"
    >
      <Grid item>
        <LeftDashDataCells />
      </Grid>
      <Grid item xs={6}>
        <MapContainer />
      </Grid>
      <Grid item>
        <RightDashDataCells />
      </Grid>
    </Grid>
  );
}
