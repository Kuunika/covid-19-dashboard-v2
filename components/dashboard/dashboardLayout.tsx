import { useMediaQuery, useTheme } from "@mui/material";
import DesktopView from "./responsiveness/desktopView";
import MobileView from "./responsiveness/mobileView";
export default function DashboardLayout() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return matches ? <DesktopView /> : <MobileView />;
}
