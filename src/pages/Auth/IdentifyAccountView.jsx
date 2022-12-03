import React from "react";
import { Form, FormikProvider } from "formik";

import { Container, Typography } from "@mui/material";
import Logo from "../../components/Logo";
import { CircularProgress } from "@mui/material";
import { Alert } from "@mui/material";
import { Error } from "@mui/icons-material";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";
import { Fade } from "@mui/material";
import { Box, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { motion } from "framer-motion";

const IdentifyAccountView = ({
  formik,
  errors,
  touched,
  getFieldProps,
  handleSubmit,
  isSubmitting,
  errorMessage,
  iserror,
  setIserror,
  isOkClicked,
}) => {
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
                  <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{
                      "& fieldset": {
                        borderColor: "white",
                      },
                    }}
                  />
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
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
              <p></p>
              
          { iserror &&   <Fade
                    in={isOkClicked}
                    timeout={{ enter: 500, exit: 500 }}
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
                      {iserror ? errorMessage : "Codice inviato correttamente"}
                    </Alert>
                  </Fade>}
                 
            </Form>
          </FormikProvider>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default IdentifyAccountView;
