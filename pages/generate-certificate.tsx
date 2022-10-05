import { Alert, Box, Paper, TextField, Typography } from "@mui/material";
import BasicButton from "../components/common/button";

export default function GenerateCertificate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Paper sx={{ pt: "20px", pb: "50px", px: "20px" }}> */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          "& > :not(style)": { my: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{
            "&:hover": {
              backgroundColor: "#F0F0F0",
            },
          }}
          id="outlined-basic"
          label="EPI"
          variant="outlined"
        />
        <BasicButton title="generate certificate" />
        <Typography variant="caption" align="center" color={"#024360"}>
          <strong>Call 929 if you experience any issue.</strong>
        </Typography>
      </Box>
      {/* </Paper> */}
    </Box>
  );
}
