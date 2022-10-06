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

  const logoDimension = matches ? 80 : 40;
  const fontSize = matches ? "h6" : "body2";

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
            <Image
              src="/Logo.png"
              width={logoDimension}
              height={logoDimension}
            />

            <Typography variant={fontSize} component="div">
              Ministry Of Health - Malawi.
              <br />
              COVID-19 National Information Dashboard.
            </Typography>
          </Box>
        </Link>
        {matches ? (
          <>
            <CertificateMenu />
            <Button color="inherit">situation reports</Button>
            <Link href="/#phylodynamics" sm>
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
