import React, { useState } from "react";
import { Form, FormikProvider } from "formik";

import Logo from "../../components/Logo";
import { Error, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  CircularProgress,
  Alert,
  Container,
  Typography,
  Fade,
  Stack,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";

const ResetPasswordView = ({
  handleSubmit,
  isSubmitting,
  errorMessage,
  iserror,
  setIserror,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
          <Box>
            <TextField
              fullWidth
              autoComplete="verificationCode"
              label="Verification Code"
              name="verificationCode"
              margin="normal"
              required
              type="number"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              label="New Password"
              name="newPassword"
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

            <TextField
              margin="normal"
              fullWidth
              autoComplete="confirm-new-password"
              type={showPassword ? "text" : "password"}
              label="Confirm New Password"
              name="confirmNewPassword"
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

        
  );
};

export default ResetPasswordView;
