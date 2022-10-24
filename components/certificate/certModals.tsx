import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { BasicModal } from "../common/modal";
import { ViewValidationCert } from "./viewValidationCert";
import { ICertificate } from "../../interfaces";
import Button from "@mui/material/Button";
import colors from "../../themes/siteColors";

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
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    setModelOpen(open);
  }, [open]);

  return (
    <BasicModal open={modelOpen}>
      {loading ? (
        <LoadingImage message={message} />
      ) : (
        <>
          <ViewValidationCert certificate={certificate} />
          <Button
            onClick={() => setModelOpen(false)}
            sx={{
              backgroundColor: colors.primaryColor,
              color: "#fff",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: colors.primaryColor,
                opacity: 0.8,
              },
            }}
          >
            ok
          </Button>
        </>
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
