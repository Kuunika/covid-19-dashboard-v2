import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import colors from "../../themes/siteColors";
import { Troubleshoot } from "@mui/icons-material";

type IProps = {
  title: string;
  type?: string;
  disabled?: boolean;
};

export default function BasicButton({ title, type, disabled }: IProps) {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      type="submit"
      size="large"
      sx={{
        backgroundColor: colors.primaryColor,
        color: "#fff",
        "&:hover": {
          backgroundColor: colors.primaryColor,
          opacity: 0.9,
        },
      }}
    >
      {title}
    </Button>
  );
}
