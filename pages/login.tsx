import {
  Box,
  Paper,
  TextField,
  useMediaQuery,
  useTheme,
  Alert,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";

import BasicButton from "../components/common/button";
import { DashboardContext, DashboardContextType } from "../contexts/dashboards";
import { login } from "../services/api";
import { ErrorMessage } from "../components/common";

export default function Login() {
  const theme = useTheme();
  const [submitting, setSubmitting] = useState(false);
  const matchedSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { saveDashboards, auth } = useContext(
    DashboardContext
  ) as DashboardContextType;
  const [submissionError, setSubmissionError] = useState({
    error: false,
    message: "",
  });

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
    setSubmitting(true);
    e.preventDefault();

    setSubmissionError({ error: false, message: "" });
    const response = await login(
      formData.username.value,
      formData.password.value
    );

    console.log(response);

    if (response.status === 200) {
      auth.storeToken(response.data.jwt);
      saveDashboards(response.data.user.dashboards);
      setSubmitting(false);
      return;
    }

    setSubmissionError({ error: true, message: response.data });
    setSubmitting(false);
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ErrorMessage message={submissionError.message} />
      <Paper
        sx={{
          padding: "10px",
          width: `${matchedSM ? "30ch" : "40ch"}`,
          mt: 2,
        }}
      >
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
          {!auth.isAuthenticated ? (
            <>
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
              <BasicButton loading={submitting} title="Login" />
            </>
          ) : (
            <Alert severity="success">
              Logged in successfully, Please click on <b>More Dashboards</b> to
              see all dashboards or Logout
            </Alert>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
