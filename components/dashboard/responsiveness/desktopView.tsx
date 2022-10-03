import { Grid, Stack } from "@mui/material";
import LeftDashDataCells from "../leftDashDataCells";
import MapContainer from "../mapContainer";
import RightDashDataCells from "../rightDashDataCells";
import TopBar from "../topBar";

export default function DesktopView() {
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
        <Stack>
          <TopBar />
          <MapContainer />
        </Stack>
      </Grid>
      <Grid item>
        <RightDashDataCells />
      </Grid>
    </Grid>
  );
}
