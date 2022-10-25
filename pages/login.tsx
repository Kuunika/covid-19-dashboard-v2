import { Box, Paper, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import BasicButton from "../components/common/button";
import { DashboardContext, DashboardContextType } from "../contexts/dashboards";
import { useAuth } from "../hooks/useAuth";
import { login } from "../services/api";

export default function Login() {
  const theme = useTheme();
  const { isAuthenticated, storeToken } = useAuth();
  const matchedSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { saveDashboards, auth } = useContext(
    DashboardContext
  ) as DashboardContextType;

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  const [formData, setFormData] = useState({
    username: { value: "", error: false, touched: false },
    password: { value: "", error: false, touched: false },
  });

  const {
    touched: passTouched,
    value: passValue,
    error: passError,
  } = formData.password;
  const {
    touched: userTouched,
    value: userValue,
    error: userError,
  } = formData.username;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await login(formData.username.value, formData.password.value);

    if (data) {
      auth.storeToken(data.jwt);
      saveDashboards(data.user.dashboards);
    }
  };

  const handleChange = (e: any) => {
    const name: "password" | "username" = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({
      ...formData,
      [name]: { ...formData[name], value },
    }));
  };

  useEffect(() => {
    setFormData(({ password, username }) => ({
      password: {
        ...password,
        error: !Boolean(password.touched && password.value),
      },
      username: {
        ...username,
        error: !Boolean(username.touched && username.value),
      },
    }));
  }, [formData.password.value, formData.username.value]);

  return (
    <Box
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: "10px", width: `${matchedSM ? "30ch" : "40ch"}` }}>
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
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={userValue}
            onChange={handleChange}
            onBlur={() =>
              setFormData((formData) => ({
                ...formData,
                username: { ...formData.username, touched: true },
              }))
            }
            error={userTouched && userError}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={handleChange}
            value={passValue}
            onBlur={() =>
              setFormData((formData) => ({
                ...formData,
                password: { ...formData.password, touched: true },
              }))
            }
            error={passTouched && passError}
          />
          <BasicButton title="Login" />
        </Box>
      </Paper>
    </Box>
  );
}
