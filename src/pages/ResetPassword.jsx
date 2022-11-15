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
import {Alert} from "@mui/material";
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

const RootStyle = styled("div")({
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

const ResetPassword = (props) => {
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { state } = useLocation();
  const { email } = state;

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    verificationCode: Yup.string().required("Verification code is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password is required"),
  });

  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
    },
  });

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");

      Auth.forgotPasswordSubmit(email, values.verificationCode, values.password)
        .then((data) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
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
              Check your email for verification code
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
                    autoComplete="verificationCode"
                    label="Verification Code"
                    name="verificationCode"
                    {...getFieldProps("verificationCode")}
                    error={Boolean(
                      touched.verificationCode && errors.verificationCode
                    )}
                    helperText={
                      touched.verificationCode && errors.verificationCode
                    }
                  />

                  <CustomTextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="New Password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <Icon icon="eva:eye-fill" />
                            ) : (
                              <Icon icon="eva:eye-off-fill" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <CustomTextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Confirm New Password"
                    {...getFieldProps("confirmPassword")}
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <Icon icon="eva:eye-fill" />
                            ) : (
                              <Icon icon="eva:eye-off-fill" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
                  {/* {iserror ? (
                    <Alert
                      variant="filled"
                      color="primary"
                      icon={<Error fontSize="inherit" />}
                    >
                      {errorMessage}
                    </Alert>
                  ) : (
                    <></>
                  )} */}

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
                    {isSubmitting ? "loading..." : "Reset"}
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

export default ResetPassword;
