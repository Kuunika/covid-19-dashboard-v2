import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery, useTheme } from "@mui/material";

const style = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
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
  width?: any;
};

export const BasicModal: FC<PropsWithChildren<IProps>> = ({
  open,
  children,
  width,
}) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            ...{ top: matchesSM ? "50%" : "50%" },
            ...{ width: width },
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};
