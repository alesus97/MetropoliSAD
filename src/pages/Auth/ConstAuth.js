
import styled from "@emotion/styled";
import { Box } from "@mui/material";

let easing = [0.6, -0.05, 0.01, 0.99];

export const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

export const RootStyle = styled("div")({
    //   background: "rgb(249, 250, 251)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  });
  
 export const HeadingStyle = styled(Box)({
    textAlign: "center",
  });
  
 export const ContentStyle = styled("div")({
    maxWidth: 600,
    padding: 25,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#292828",
  });

  export const fadeInUp = {
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