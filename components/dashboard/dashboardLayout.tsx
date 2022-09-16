import { Grid } from "@mui/material";
import LeftDashDataCells from "./leftDashDataCells";
import MapContainer from "./mapContainer";
import RightDashDataCells from "./rightDashDataCells";

export default function DashboardLayout() {
  return (
    <Grid sx={{ margin: 10 }} container spacing={2}>
      <Grid>
        <LeftDashDataCells />
      </Grid>
      <Grid xs={6}>
        <MapContainer />
      </Grid>
      <Grid>
        <RightDashDataCells />
      </Grid>
    </Grid>
  );
}
