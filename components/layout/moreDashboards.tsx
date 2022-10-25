import { useContext, useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import siteColors from "../../themes/siteColors";
import Link from "next/link";
import { IDashboard } from "../../interfaces";
import {
  DashboardContext,
  DashboardContextType,
} from "../../contexts/dashboards";
import { useAuth } from "../../hooks/useAuth";

export default function MoreDashboards() {
  const { dashboards, auth } = useContext(
    DashboardContext
  ) as DashboardContextType;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-label="menu"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        More Dashboards
      </Button>

      <Menu
        id="certificate-menu"
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
        {dashboards.map(({ id, dashboard_name }) => (
          <Link key={id} href={`/dashboards/${id}`}>
            <MenuItem onClick={handleClose}>{dashboard_name}</MenuItem>
          </Link>
        ))}
        <Link href="">
          <MenuItem
            onClick={() => {
              auth.deleteToken();
              handleClose();
            }}
          >
            logout
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
