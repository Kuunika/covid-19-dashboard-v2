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

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: COLORS.primaryColor }}>
      <Toolbar sx={{ padding: "5px" }}>
        <Link href="/">
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Image src="/Logo.png" width={80} height={80} />
            <Box>
              <Typography variant="h6" component="div">
                Ministry Of Health - Malawi.
              </Typography>
              <Typography variant="h6" component="div">
                COVID-19 National Information Dashboard.
              </Typography>
            </Box>
          </Box>
        </Link>
        {matches ? (
          <>
            <CertificateMenu />
            <Button color="inherit">situation reports</Button>
            <Link href="#phylodynamics">
              <Button color="inherit">Phylodynamics</Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </>
        ) : (
          <DashboardMenu />
        )}
      </Toolbar>
    </AppBar>
  );
}
