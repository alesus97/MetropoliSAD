import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Amplify, Auth } from "aws-amplify";
import { AUTH_USER_TOKEN_KEY } from "../const";
import awsconfig from "../aws-exports";
import styled from "@emotion/styled";
import { Container, Typography, Divider } from "@mui/material";
import Logo from "../components/Logo";
import { CircularProgress } from "@mui/material";
import {Alert} from "@mui/material"
import { Error } from "@mui/icons-material";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const RootStyle = styled("div")({
  //   background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 600,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#292828",
});

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const IdentifyAccount = (props) => {
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isOkClicked, setOkClicked] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");

      Auth.forgotPassword(values.email)
        .then((data) => {
          setErrorMessage("");
          setOkClicked(true);
          setIserror(false);

          console.log(data);

          navigate("/resetPassword", { state: { email: values.email } });
        })
        .catch((err) => {
          setOkClicked(true);
          setIserror(true);
          console.log(err);
          setErrorMessage(err.message);
        });
    },
  });

  const { errors, touched, values, isSubmitting, getFieldProps, handleSubmit } =
    formik;

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Provide email account
            </Typography>
          </HeadingStyle>

          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box
                component={motion.div}
                animate={{
                  transition: {
                    staggerChildren: 0.55,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  animate={animate}
                >
                  <CustomTextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  ></Stack>

                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    loadingIndicator={
                      <CircularProgress color="primary" size={16} />
                    }
                  >
                    {isSubmitting ? "loading..." : "Confirm"}
                  </LoadingButton>
                </Box>
              </Box>
            </Form>
          </FormikProvider>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default IdentifyAccount;
