import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Error } from "@mui/icons-material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { AUTH_USER_TOKEN_KEY } from "../const";

import { styled } from "@mui/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

export default function ForgotPassword(props) {
  Amplify.configure(awsconfig);
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const {state} = useLocation();
  const {email}= state;

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    const verificationCode = data.get("verification_code");
    const password = data.get("new_password");
    const confirmPassword = data.get("confirm_password");

    Auth.forgotPasswordSubmit(
      email,
      verificationCode,
      password
    )
      .then((data) => {
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Controlla la tua email per il codice di verifica
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          // noValidate
          sx={{ mt: 1 }}
        >
          <CustomTextField
            margin="normal"
            required
            fullWidth
            id="verification_code"
            label="Codice di Verifica"
            name="verification_code"
            autoComplete="email"
            autoFocus
          />
          <CustomTextField
            margin="normal"
            required
            fullWidth
            id="new_password"
            label="Nuova Password"
            name="new_password"
            autoComplete="email"
            autoFocus
          />
          <CustomTextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Conferma Password"
            type="confirm_password"
            id="confirm_password"
            autoComplete="current-password"
          />

          {iserror ? (
            <Alert
              variant="filled"
              color="primary"
              icon={<Error fontSize="inherit" />}
            >
              {errorMessage}
            </Alert>
          ) : (
            <></>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Imposta nuova password
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
