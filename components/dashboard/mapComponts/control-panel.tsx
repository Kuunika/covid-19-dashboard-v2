import { FC, useState, useEffect } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import LEGENDS from "../../../constants/legends";
import { IColor } from "../../../interfaces";

type IProps = {
  color: IColor;
};

const ControlPanel: FC<IProps> = ({ color }) => {
  const [colors, setColors] = useState<Array<any>>([]);

  useEffect(() => {
    setColors(Object.entries(color));
  }, [color]);

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
        {colors.map((color, index) => (
          <ColorTab
            key={color[1]}
            color={color[1]}
            legend={LEGENDS.deaths[index]}
          />
        ))}
      </Stack>
    </Paper>
  );
};

const ColorTab: FC<{ color: string; legend: string }> = ({ color, legend }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{ width: "20px", height: "20px", backgroundColor: color, mr: 1 }}
      />{" "}
      <Typography variant="body1" color={"grey"}>
        {legend}
      </Typography>
    </Box>
  );
};
export default React.memo(ControlPanel);
