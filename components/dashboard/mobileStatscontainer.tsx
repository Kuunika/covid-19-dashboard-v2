import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { IMobileStats } from "../../interfaces";
import MobileStats from "./mobileStats";

const MobileStatsContainer: FC<{ stats: IMobileStats[] }> = ({ stats }) => {
  return (
    <Paper sx={{ display: "flex", justifyContent: "center" }}>
      {stats.map((stat) => (
        <MobileStats title={stat.title} value={stat.value} />
      ))}
    </Paper>
  );
};

export default MobileStatsContainer;
