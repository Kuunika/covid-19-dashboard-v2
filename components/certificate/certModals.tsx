import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { BasicModal } from "../common/modal";
import { ViewValidationCert } from "./viewValidationCert";
import { ICertificate } from "../../interfaces";

type IProps = {
  open: boolean;
  message?: string;
};

export const LoadingModal: FC<IProps> = ({ open, message }) => {
  return (
    <BasicModal open={open}>
      <LoadingImage message={message} />
    </BasicModal>
  );
};

export const ValidationModal: FC<
  IProps & { loading: boolean; certificate: ICertificate }
> = ({ loading, open, message, certificate }) => {
  return (
    <BasicModal open={open}>
      {loading ? (
        <LoadingImage message={message} />
      ) : (
        <ViewValidationCert certificate={certificate} />
      )}
    </BasicModal>
  );
};

const LoadingImage: FC<{ message?: string }> = ({ message }) => {
  return (
    <>
      <Image src={"/rolling.gif"} width={50} height={50} />
      <Typography
        variant="subtitle2"
        color={"#024360"}
        sx={{ textTransform: "lowercase", mt: "3ch" }}
      >
        {message}
      </Typography>
    </>
  );
};
