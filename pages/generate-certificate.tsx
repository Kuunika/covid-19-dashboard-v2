import {
  Alert,
  Box,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import BasicButton from "../components/common/button";

export default function GenerateCertificate() {
  const theme = useTheme();
  const matchedSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [epiNumber, setEpiNumber] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(epiNumber);
  };

  useEffect(() => {
    if (!touched) return;
    setError(!(touched && epiNumber));
  }, [epiNumber]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          "& > :not(style)": { my: 1, width: `${matchedSM ? "30ch" : "45ch"}` },
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
          onChange={(e) => setEpiNumber(e.target.value)}
          value={epiNumber}
          error={error}
          onBlur={(e) => setTouched(true)}
        />
        <BasicButton title="generate certificate" disabled={error} />
        <Typography variant="caption" align="center" color={"#024360"}>
          <strong>Call 929 if you experience any issue.</strong>
        </Typography>
      </Box>
    </Box>
  );
}
