import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Amplify, Auth } from "aws-amplify";
import { AUTH_USER_TOKEN_KEY } from "../../const";
import awsconfig from "../../aws-exports";
import Logo from "../../components/Logo";
import { Error, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";
import YupPassword from "yup-password";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  CircularProgress,
  Alert,
  Container,
  Typography, 
  Fade
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


const ResetPassword = (props) => {
  YupPassword(Yup);
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { state } = useLocation();
  const { email } = state;

  const [showPassword, setShowPassword] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    verificationCode: Yup.string().required("Verification code is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - shoud be 8 chars minimum.")
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - shoud be 8 chars minimum.")
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: () => {
      Auth.forgotPasswordSubmit(email, values.verificationCode, values.password)
        .then((data) => {
          setIserror(false);
          setErrorMessage("");
          navigate("/login");
        })
        .catch((err) => {
          setIsSubmitting(false);
          setErrorMessage(err.message);
          setIserror(true);
        });
    },
  });

  const { errors, touched, values, getFieldProps, handleSubmit } =
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
                  <TextField
                    fullWidth
                    autoComplete="verificationCode"
                    label="Verification Code"
                    name="verificationCode"
                    {...getFieldProps("verificationCode")}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                    error={Boolean(
                      touched.verificationCode && errors.verificationCode
                    )}
                    helperText={
                      touched.verificationCode && errors.verificationCode
                    }
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="New Password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <Visibility color="primary" />
                            ) : (
                              <VisibilityOff color="primary" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Confirm New Password"
                    {...getFieldProps("confirmPassword")}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
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
                              <Visibility color="primary" />
                            ) : (
                              <VisibilityOff color="primary" />
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
                  {/* <p></p>
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
                  )} */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  ></Stack>

                  <Fade
                    in={iserror} //Write the needed condition here to make it appear
                    timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                    addEndListener={() => {
                      setTimeout(() => {
                        setIserror(false);
                      }, 4000);
                    }}
                  >
                    <Alert
                      variant="filled"
                      color="primary"
                      icon={<Error fontSize="inherit" />}
                    >
                      {errorMessage}
                    </Alert>
                  </Fade>
                  <p></p>

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
