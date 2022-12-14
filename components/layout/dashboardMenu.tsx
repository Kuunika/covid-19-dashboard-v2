import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import siteColors from "../../themes/siteColors";

export default function DashboardMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "&": {
            li: { color: siteColors.primaryColor, textTransform: "capitalize" },
          },
        }}
      >
        <Link href="/generate-certificate" sx={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Vaccine Certificate</MenuItem>
        </Link>
        <Link href="/validate-certificate" sx={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Validate Certificate</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>situation reports</MenuItem>
        <Link href="/#phylodynamics" sx={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Phylodynamics</MenuItem>
        </Link>
        <Link href="/login" sx={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>More Dashboards</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
