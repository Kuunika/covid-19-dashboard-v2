import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import {
  TabSelectionContext,
  TabSelectionType,
} from "../../contexts/tabSelection";
import { ITabs } from "../../interfaces";
import DataCell from "./dataCell";

interface Props {
  data: Array<{ title: string; value: string; tab?: ITabs }>;
  view?: "mobile" | "desktop";
}
export default function DataCellContainer({ data, view = "desktop" }: Props) {
  const { activeTab, activateTab } = useContext(
    TabSelectionContext
  ) as TabSelectionType;
  return (
    <Grid container spacing={1}>
      {data.map(({ title, value, tab }, index) => (
        <Grid item key={title} xs={6} md={6} lg={12}>
          <DataCell
            title={title}
            value={value}
            active={tab === activeTab}
            onclick={(event: any) => tab && activateTab(tab)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
