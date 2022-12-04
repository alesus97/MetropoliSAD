import React from "react";
import Logo from "../../components/Logo";

import { Error } from "@mui/icons-material";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";

import { Box, Fade, TextField, Alert, CircularProgress, Container, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { motion } from "framer-motion";

const IdentifyAccountView = ({
  handleSubmit, 
  isSubmitting,
  errorMessage,
  iserror,
  setIserror,
  isOkClicked,
}) => {


  return (
    <RootStyle>
      <Container maxWidth="sm" component="form" onSubmit={handleSubmit}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Provide email account
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
              label="Identify Account"
              required
              autoComplete="Identify Account"
              name="identifyAccount"
              type="email"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator={<CircularProgress color="primary" size={16} />}
            >
              {isSubmitting ? "loading..." : "Confirm"}
            </LoadingButton>

    

            {iserror && (
              <Fade
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
              </Fade>
            )}
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default IdentifyAccountView;
