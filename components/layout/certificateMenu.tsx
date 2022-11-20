import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import siteColors from "../../themes/siteColors";
import Link from "next/link";

export default function CertificateMenu() {
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
      <Button
        color="inherit"
        aria-label="menu"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Vaccine certificate
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
        <Link href="/generate-certificate">
          <MenuItem onClick={handleClose}>Generate Certificate</MenuItem>
        </Link>
        <Link href="/validate-certificate">
          <MenuItem onClick={handleClose}>Validate Certificate</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
