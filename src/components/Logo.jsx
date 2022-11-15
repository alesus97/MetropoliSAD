import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="static/logo192.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;