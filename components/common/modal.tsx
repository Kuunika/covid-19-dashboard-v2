import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

type IProps = {
  open: boolean;
  message?: string;
};

export default function BasicModal({ open, message }: IProps) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src={"/rolling.gif"} width={50} height={50} />
          <Typography
            variant="subtitle2"
            color={"#024360"}
            sx={{ textTransform: "lowercase", mt: "3ch" }}
          >
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
