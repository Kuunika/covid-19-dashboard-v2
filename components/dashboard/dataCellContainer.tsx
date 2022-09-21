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
}
export default function DataCellContainer({ data }: Props) {
  const { activeTab, activateTab } = useContext(
    TabSelectionContext
  ) as TabSelectionType;
  return (
    <Stack spacing={2}>
      {data.map(({ title, value, tab }) => (
        <DataCell
          key={title}
          title={title}
          value={value}
          active={tab === activeTab}
          onclick={(event: any) => tab && activateTab(tab)}
        />
      ))}
    </Stack>
  );
}
