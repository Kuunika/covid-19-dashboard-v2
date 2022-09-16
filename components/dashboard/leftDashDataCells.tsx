import DataCellContainer from "./dataCellContainer";

export default function LeftDashDataCells() {
  const cellData = [
    { title: "Confirmed Cases", value: "2000" },
    { title: "Active Cases", value: "2000" },
    { title: "Suspected Cases", value: "2000" },
    { title: "Recovered Cases", value: "2000" },
  ];

  return <DataCellContainer data={cellData} />;
}
