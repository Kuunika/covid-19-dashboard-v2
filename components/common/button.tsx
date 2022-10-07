import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import colors from "../../themes/siteColors";

type IProps = {
  title: string;
  type?: string;
  disabled?: boolean;
  size?: "large" | "small";
  sx?: any;
  onClick?: () => void;
};

export default function BasicButton({
  title,
  type,
  disabled,
  size = "large",
  sx,
  onClick,
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
      {title}
    </Button>
  );
}
