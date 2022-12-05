import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

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

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (

        <Box>
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

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />

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
            </Box>

            
  );
};

export default LoginView;
