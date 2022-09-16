import { Stack } from "@mui/system";
import DataCell from "./dataCell";

interface Props {
  data: Array<{ title: string; value: string }>;
}
export default function DataCellContainer({ data }: Props) {
  return (
    <Stack spacing={2}>
      {data.map(({ title, value }) => (
        <DataCell title={title} value={value} />
      ))}
    </Stack>
  );
}
