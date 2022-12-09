import {
  RootStyle,
  ContentStyle,
  HeadingStyle,
  animate,
  fadeInUp,
} from "../pages/Auth/ConstAuth";

import {
  Box,
  CircularProgress,
  Alert,
  Container,
  Typography,
  Fade,
} from "@mui/material";

import { Error } from "@mui/icons-material";
import Logo from "./Logo";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthLayout(props) {
    const [iserror, setIserror] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {

        setIsSubmitting(true);

        props.handleSubmit(event)
         .then(() => {
            setIserror(false);
            setErrorMessage("");
          })
          .catch((err)=>{
            console.log(err)
            setIsSubmitting(false);     
            setErrorMessage(err.message);
            setIserror(true); 
          }) 

    } 


  return (
    <RootStyle>
      <Container maxWidth="sm" component="form" onSubmit={handleSubmit}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              {props.title}
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

            {props.children}

          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator={<CircularProgress color="primary" size={16} />}
            >
              {isSubmitting ? "loading..." : props.buttonLabel}
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
}
