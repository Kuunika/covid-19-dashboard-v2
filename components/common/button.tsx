import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import colors from "../../themes/siteColors";
import CircularProgress from "@mui/material/CircularProgress";

type IProps = {
  title: string;
  type?: string;
  disabled?: boolean;
  size?: "large" | "small";
  sx?: any;
  onClick?: () => void;
  loading?: boolean;
};

export default function BasicButton({
  title,
  type,
  disabled,
  size = "large",
  sx,
  onClick,
  loading,
}: IProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      type="submit"
      size={size}
      sx={{
        backgroundColor: colors.primaryColor,
        color: "#fff",
        "&:hover": {
          backgroundColor: colors.primaryColor,
          opacity: 0.9,
        },
        ...sx,
      }}
    >
      {loading ? <CircularProgress sx={{ color: "#fff" }} size={30} /> : title}
    </Button>
  );
}
