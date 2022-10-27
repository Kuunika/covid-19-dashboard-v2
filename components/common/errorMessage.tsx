import { Typography } from "@mui/material";

type IProps = {
  message: string;
};

export function ErrorMessage({ message }: IProps) {
  return (
    <Typography variant="caption" align="center" color={"#D32F2F"}>
      <strong>{message}</strong>
    </Typography>
  );
}
