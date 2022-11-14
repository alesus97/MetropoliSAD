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
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Error } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
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

export default function IdentifyAccount(props) {
  Amplify.configure(awsconfig);
  const [iserror, setIserror] = useState();
  const [isOkClicked, setOkClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    console.log(iserror);

    const email = data.get("email");
    Auth.forgotPassword(email)
      .then((data) => {
        setErrorMessage("");
        setOkClicked(true);
        setIserror(false);

        console.log(data);

         navigate('/resetPassword', {state: {email: email}} );
      })
      .catch((err) => {
        setOkClicked(true);
        setIserror(true);
        console.log(err);
        setErrorMessage(err.message);
        
      });
  };

  const handleCancel = () => {
    console.log("AAA");
    navigate("/login", { replace: true });
  };

  return (
    <Container component="main" maxWidth="xs" justify="center" >
    <Box
      sx={{
        marginTop: 8,
       //display: "flex",
        flexDirection: "column",
        alignItems: "center",
      
        
       }}
    >
        <Avatar sx={{ m: 1,  bgcolor: "secondary.main" }}>
    <LockOutlinedIcon />
  </Avatar>
  <Typography component="h1" variant="h5">
    inserire mail account gestore cinema
  </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          
          sx={{ mt: 1 }}
        
        >
          <CustomTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Indirizzo Email"
            name="email"
            autoComplete="email"
            autoFocus
          
          />



          {isOkClicked ? (
            <Alert
              variant="filled"
              color="primary"
              icon={<Error fontSize="inherit" />}
            >
              {iserror ? errorMessage : "Codice inviato correttamente"}
            </Alert>
          ) : (
            <></>
          )}
          <p></p>
            
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit" fullWidth >
              Ok
            </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
            <Button variant="contained" onClick={() => handleCancel()} fullWidth >
              Cancel
            </Button>
            </Grid>
          </Grid>
         
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

