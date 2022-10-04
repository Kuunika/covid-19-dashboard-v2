import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import COLORS from "../../themes/siteColors";
import { useMediaQuery, useTheme } from "@mui/material";
import DashboardMenu from "./dashboardMenu";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: COLORS.primaryColor }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          COVID19 Dashboard
        </Typography>
        {matches ? (
          <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Generate certificate</Button>
            <Button color="inherit">situation reports</Button>
            <Button color="inherit">Phylodynamics</Button>
            <Button color="inherit">Login</Button>
          </>
        ) : (
          <DashboardMenu />
        )}
      </Toolbar>
    </AppBar>
  );
}
