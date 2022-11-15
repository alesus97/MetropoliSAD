import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Amplify, Auth } from "aws-amplify";
import { AUTH_USER_TOKEN_KEY } from "../../const";
import awsconfig from "../../aws-exports";
import Logo from "../../components/Logo";
import { Error } from "@mui/icons-material";
import { animate, RootStyle, HeadingStyle, ContentStyle, fadeInUp } from "./ConstAuth";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const LoginForm = (props) => {
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const location = useLocation();
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const [showPassword, setShowPassword] = useState(false);

  
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");
        Auth.signIn(values.email, values.password)
          .then((user) => {
            setIserror(false);
            setErrorMessage("");
            console.log(user);

            localStorage.setItem(
              AUTH_USER_TOKEN_KEY,
              user.signInUserSession.accessToken.jwtToken
            );
            console.log(localStorage);

            props.onLoginAction();

            navigate("/schedule", { replace: true });
          })
          .catch((err) => {
            setErrorMessage(err.message);
            setIserror(true);
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

            <CustomTextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                
                endAdornment: (
                  <InputAdornment position="end" >
                    <IconButton 
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Visibility color="primary"/>
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

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator={<CircularProgress color="primary" size={16} />}
              
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

export default LoginForm;
