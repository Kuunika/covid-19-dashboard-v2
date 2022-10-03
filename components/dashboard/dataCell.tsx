import { Paper, Typography } from "@mui/material";
import COLORS from "../../themes/siteColors";

interface Props {
  title: string;
  value: string;
  active?: boolean;
  onclick: (event: any) => void;
}

export default function DataCell({ title, value, active, onclick }: Props) {
  return (
    <Paper
      onClick={onclick}
      sx={[
        (theme) => ({
          py: 3,
          px: 5,
          "&:hover": {
            backgroundColor: `${active ? COLORS.primaryColor : "#fafafa"}`,
            cursor: "pointer",
            color: `${active ? "#fff" : COLORS.primaryColor}`,
          },
          backgroundColor: `${active ? COLORS.primaryColor : ""}`,
          color: `${active ? "#fff" : COLORS.primaryColor}`,
          [theme.breakpoints.up("lg")]: {
            width: "100%",
          },
          [theme.breakpoints.down("md")]: {
            width: "100%",
            boxShadow: "none",
          },
        }),
      ]}
      elevation={1}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Paper>
  );
}
