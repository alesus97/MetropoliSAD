import React, { useState } from "react";
import ResetPasswordController from "../../controllers/ResetPasswordController";
import { Auth } from "aws-amplify";
import { 
  Visibility, 
  VisibilityOff 
} from "@mui/icons-material";

import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Stack,
  Link,
  Typography
} from "@mui/material";



const ResetPasswordView = ({resendConfirmationCode}) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
          <Box>
            <TextField
              fullWidth
              autoComplete="off"
              data-cy="codice_verifica"
              label="Codice di verifica"
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
              autoComplete="off"
              data-cy="new_password"
              type={showPassword ? "text" : "password"}
              label="Nuova password"
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
              data-cy="confirm_new_password"
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              label="Conferma nuova password"
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

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >

          <Typography
            onClick={resendConfirmationCode}
            alignContent="center"
            color="primary"
            variant="subtitle2"
            underline="hover"
          >  Non hai ricevuto il codice di verifica? Clicca qui per re-inviarlo
          </Typography>

          </Stack>

          </Box>

        
  );
};

export default ResetPasswordView;
