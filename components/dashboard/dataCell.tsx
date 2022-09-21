import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ITabs } from "../../interfaces";

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
      sx={{
        width: 250,
        py: 3,
        px: 5,
        "&:hover": {
          backgroundColor: `${active ? "#007092" : "#fafafa"}`,
          cursor: "pointer",
          color: `${active ? "#fff" : "#007092"}`,
        },
        backgroundColor: `${active ? "#007092" : ""}`,
        color: `${active ? "#fff" : "#007092"}`,
      }}
      elevation={1}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Paper>
  );
}
