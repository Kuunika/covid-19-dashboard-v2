import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import colors from "../../themes/siteColors";
import { Troubleshoot } from "@mui/icons-material";

type IProps = {
  title: string;
};

export default function BasicButton({ title }: IProps) {
  return (
    <Button
      variant="contained"
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
