import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import DesktopView from "./responsiveness/desktopView";
import MobileView from "./responsiveness/mobileView";
export default function DashboardLayout() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      {matches ? <DesktopView /> : <MobileView />}

      <Box
        sx={{ px: `${matches ? "100px" : "0px"}`, mt: "20px", width: "100%" }}
      >
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="800px"
          src="https://phylodynamics2.pandemicprepardness.org/SARS-CoV-2/Malawi"
        ></iframe>
      </Box>
    </>
  );
}
