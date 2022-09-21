import DataCellContainer from "./dataCellContainer";
import * as TABS from "../../constants/tabs";

export default function LeftDashDataCells() {
  const cellData = [
    { title: "Confirmed", value: "2000" },
    { title: "Active", value: "2000", tab: TABS.ACTIVE_CASES },
    { title: "Suspected ", value: "2000" },
    { title: "Deaths", value: "2000", tab: TABS.DEATHS },
    { title: "Recovered", value: "2000" },
  ];

  return <DataCellContainer data={cellData} />;
}
