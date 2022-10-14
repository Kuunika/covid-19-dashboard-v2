import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { BasicModal } from "../common/modal";

type IProps = {
  open: boolean;
  message?: string;
};

export const LoadingModal: FC<IProps> = ({ open, message }) => {
  return (
    <BasicModal open={open} message={message}>
      <Image src={"/rolling.gif"} width={50} height={50} />
      <Typography
        variant="subtitle2"
        color={"#024360"}
        sx={{ textTransform: "lowercase", mt: "3ch" }}
      >
        {message}
      </Typography>
    </BasicModal>
  );
};

export const ValidationModal: FC<IProps & { loading: boolean }> = ({
  loading,
  open,
  message,
}) => {
  return <BasicModal open={open} message={message}></BasicModal>;
};
