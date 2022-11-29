import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";

import Logo from "../../components/Logo";

import {Fade} from "@mui/material";
import axios from "axios";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";
import { Visibility, VisibilityOff, Error } from "@mui/icons-material";

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
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";

const LoginView = ({formik, errors, touched, values, getFieldProps, handleSubmit, isSubmitting, errorMessage, iserror, setIserror}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
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
                    autoComplete="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
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
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
                  <p></p>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...getFieldProps("remember")}
                          checked={values.remember}
                        />
                      }
                      label="Remember me"
                    />

                    <Link
                      component={RouterLink}
                      variant="subtitle2"
                      to="/identifyAccount"
                      underline="hover"
                    >
                      Forgot password?
                    </Link>
                  </Stack>


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
                    {isSubmitting ? "loading..." : "Login"}
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

export default LoginView;
