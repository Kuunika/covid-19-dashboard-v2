import { Box, Stack } from "@mui/material";
import DataCellContainer from "../dataCellContainer";
import MobileStatsContainer from "../mobileStatscontainer";
import * as TABS from "../../../constants/tabs";
import MapContainer from "../mapContainer";

const first = [
  {
    title: "Active Cases",
    value: "500",
  },
];
const second = [
  {
    title: "Suspected",
    value: "500",
  },
  {
    title: "Received Samples",
    value: "500",
  },
  {
    title: "tested",
    value: "500",
  },
];

export default function MobileView() {
  const cellData = [
    { title: "Confirmed", value: "2000", tab: TABS.CONFIRMED },
    { title: "Active", value: "2000", tab: TABS.ACTIVE_CASES },
    { title: "Deaths", value: "2000", tab: TABS.DEATHS },
    { title: "Recovered", value: "2000", tab: TABS.RECOVERED },
  ];
  return (
    <Stack sx={{ marginTop: 10, mx: 2 }} justifyContent="center" spacing={1}>
      <MobileStatsContainer stats={first} />
      <MobileStatsContainer stats={second} />
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "5px",
          "&": { div: { mb: "10px" } },
        }}
      >
        <DataCellContainer data={cellData} />
        <MapContainer />
      </Box>
    </Stack>
  );
}
