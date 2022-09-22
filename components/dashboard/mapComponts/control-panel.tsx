import { FC } from "react";
import { Box, Paper, Stack } from "@mui/material";
import * as React from "react";
import COLORS from "../../../themes/colors";

function ControlPanel() {
  const colors = Object.entries(COLORS.activeCases);
  return (
    <Paper
      sx={{
        position: "absolute",
        bottom: 20,
        right: 4,
        width: "150px",
        padding: 1,
      }}
    >
      <Stack spacing={0.1}>
        {colors.map((color) => (
          <ColorTab color={color[1]} />
        ))}
      </Stack>
    </Paper>
  );
}

const ColorTab: FC<{ color: string }> = ({ color }) => {
  return (
    <Box>
      <Box sx={{ width: "20px", height: "20px", backgroundColor: color }}></Box>
    </Box>
  );
};
export default React.memo(ControlPanel);
