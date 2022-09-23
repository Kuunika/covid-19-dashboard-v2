import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import {
  TabSelectionContext,
  TabSelectionType,
} from "../../contexts/tabSelection";

export default function TopBar() {
  const { title } = useContext(TabSelectionContext) as TabSelectionType;
  return (
    <Paper
      sx={{
        display: "flex",
        padding: 1,
        justifyContent: "center",
        textTransform: "capitalize",
        color: "#007092",
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Paper>
  );
}
