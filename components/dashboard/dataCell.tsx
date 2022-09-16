import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  value: string;
}

export default function DataCell({ title, value }: Props) {
  return (
    <Paper sx={{ width: 500, py: 10, px: 5 }} elevation={6}>
      <Typography variant="h3" color="blue">
        {title}
      </Typography>
      <Typography variant="h4" color="blue">
        {value}
      </Typography>
    </Paper>
  );
}
