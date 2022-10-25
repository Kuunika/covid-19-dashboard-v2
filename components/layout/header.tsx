import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import COLORS from "../../themes/siteColors";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import DashboardMenu from "./dashboardMenu";
import CertificateMenu from "./certificateMenu";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import MoreDashboards from "./moreDashboards";
import {
  DashboardContext,
  DashboardContextType,
} from "../../contexts/dashboards";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();
  const { auth } = React.useContext(DashboardContext) as DashboardContextType;

  const navigate = (endpoint: string) => router.push(endpoint);

  const logoDimension = matches ? 80 : 40;
  const fontSize = matches ? "h6" : "body2";

  return (
    <AppBar position="fixed" sx={{ backgroundColor: COLORS.primaryColor }}>
      <Toolbar sx={{ padding: "5px" }}>
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <Image src="/Logo.png" width={logoDimension} height={logoDimension} />

          <Typography variant={fontSize} component="div">
            Ministry Of Health - Malawi.
            <br />
            COVID-19 National Information Dashboard.
          </Typography>
        </Box>

        {matches ? (
          <>
            <CertificateMenu />
            <Button color="inherit">situation reports</Button>
            <Link href="/#phylodynamics" sm>
              <Button color="inherit">Phylodynamics</Button>
            </Link>
            {!auth.isAuthenticated ? (
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>
            ) : (
              <MoreDashboards />
            )}
          </>
        ) : (
          <DashboardMenu />
        )}
      </Toolbar>
    </AppBar>
  );
}
