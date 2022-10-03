import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IMobileStats } from "../../interfaces";

const MobileStats: FC<IMobileStats> = ({ title, value }) => {
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
  );
};

export default MobileStats;
