import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";

import Logo from "../../components/Logo";

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
  Fade,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";

const LoginView = ({
 /*  formik,
  errors,
  touched,
  values,
  getFieldProps, */
  handleSubmit,
  isSubmitting,
  errorMessage,
  iserror,
  setIserror,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <RootStyle>
      <Container maxWidth="sm" component="form" onSubmit={handleSubmit}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
            </Typography>
          </HeadingStyle>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              required
              autoComplete="Email Address"
              name="email"
              type="email"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              name="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="password"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
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
                  /*   {...getFieldProps("remember")}
                    checked={values.remember} */
                  />
                }
                label="Remember me"
              />

              <Link
                component={RouterLink}
                color="primary"
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

            <p></p>

            {iserror && (
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
            )}
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default LoginView;
