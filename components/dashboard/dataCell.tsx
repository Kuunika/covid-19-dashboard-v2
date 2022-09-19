import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  value: string;
}

export default function DataCell({ title, value }: Props) {
  return (
    <Paper sx={{ width: 300, py: 5, px: 5 }} elevation={1}>
      <Typography variant="h5" color="blue">
        {title}
      </Typography>
      <Typography variant="h6" color="blue">
        {value}
      </Typography>
    </Paper>
  );
}
