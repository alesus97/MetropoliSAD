import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, { circularProgressClasses} from "@mui/material/CircularProgress";


export default function CustomizedProgressBars(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
       
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.background.paper}}
        size={60}
        thickness={4}
        {...props}
        value={100}
      />

      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.primary.main,
            position:"absolute",
          animationDuration: "550ms",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={60}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
