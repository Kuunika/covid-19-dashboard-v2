import { useRouter } from "next/router";
import { useContext } from "react";
import {
  DashboardContext,
  DashboardContextType,
} from "../../contexts/dashboards";

//@ts-ignore
import TableauReport from "tableau-react";
import { Box } from "@mui/material";

const options = {
  height: "90vh",
  width: "100%",
  hideTabs: true,
  hideToolbar: true,
};

export default function Dashboard() {
  const { getDashboard, auth } = useContext(
    DashboardContext
  ) as DashboardContextType;
  const router = useRouter();
  const { id } = router.query;

  if (!auth.isAuthenticated) {
    router.push("/");
    return;
  }

  if (!id) {
    router.push("/");
    return;
  }

  const dashboard = getDashboard(id);

  if (!dashboard) {
    router.push("/");
    return;
  }

  return (
    <Box sx={{ marginTop: "100px" }}>
      {auth.isAuthenticated && (
        <TableauReport
          url={dashboard.dashboard_url}
          options={options}
          query={`?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=yes&:comments=no&:toolbar=no&:refresh=yes`}
        />
      )}
    </Box>
  );
}
