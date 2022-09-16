import DataCellContainer from "./dataCellContainer";

export default function RightDashDataCells() {
  const cellData = [
    { title: "Total Samples Received", value: "2000" },
    { title: "Total Samples Tested", value: "2000" },
    { title: "MW Districts with Confirmed Cases", value: "2000" },
  ];

  return <DataCellContainer data={cellData} />;
}
