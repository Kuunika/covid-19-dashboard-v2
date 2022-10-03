import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import COLORS from "../../themes/siteColors";
export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: COLORS.primaryColor }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          COVID19 Dashboard
        </Typography>
        <Button color="inherit">vaccine certificate</Button>
        <Button color="inherit">situation reports</Button>
        <Button color="inherit">Phylodynamics</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
