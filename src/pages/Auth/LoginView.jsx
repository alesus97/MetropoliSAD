import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { 
  Visibility, 
  VisibilityOff 
} from "@mui/icons-material";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (

        <Box>
            <TextField
              fullWidth
              autoComplete="username"
              data-cy="formEmail"
              margin="normal"
              label="Indirizzo email"
              required
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
              data-cy="formPassword"
              name="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
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
              <FormControlLabel control={<Checkbox />} label="Ricordami" />

              <Link
                data-cy= "recPassLink"
                component={RouterLink}
                color="primary"
                variant="subtitle2"
                to="/identificaAccount"
                underline="hover"
              >
                Password dimenticata?
              </Link>
            </Stack>
            </Box>

            
  );
};

export default LoginView;
