import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box minHeight={180}>
      <Link to="/">
        <p></p>
        <Box component="img" src="logo128.png" alt="logo"  />
      </Link>
    </Box>
  );
};

export default Logo;