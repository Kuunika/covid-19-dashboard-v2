import { Grid } from "@mui/material";
import LeftDashDataCells from "./leftDashDataCells";
import MapContainer from "./mapContainer";
import RightDashDataCells from "./rightDashDataCells";

export default function DashboardLayout() {
  return (
    <Grid sx={{ margin: 10 }} container spacing={10}>
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
