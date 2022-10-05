import { Box, Paper, TextField } from "@mui/material";
import BasicButton from "../components/common/button";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: "10px", width: "40ch" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { my: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <BasicButton title="Login" />
        </Box>
      </Paper>
    </Box>
  );
}
