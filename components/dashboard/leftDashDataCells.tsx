import DataCellContainer from "./dataCellContainer";
import * as TABS from "../../constants/tabs";

export default function LeftDashDataCells() {
  const cellData = [
    { title: "Suspected ", value: "2000" },
    { title: "Confirmed", value: "2000", tab: TABS.CONFIRMED },
    { title: "Active", value: "2000", tab: TABS.ACTIVE_CASES },
    { title: "Deaths", value: "2000", tab: TABS.DEATHS },
    { title: "Recovered", value: "2000", tab: TABS.RECOVERED },
  ];

  return <DataCellContainer data={cellData} />;
}
