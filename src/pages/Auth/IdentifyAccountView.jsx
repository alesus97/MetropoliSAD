import React from "react";
import {
  TextField, 
  Box, 
  Stack
} from "@mui/material";


const IdentifyAccountView = () => {

  return (
        <Box> 
            <TextField
              fullWidth
              data-cy="emailRecPassword"
              margin="normal"
              label="Indirizzo email"
              required
              name="identifyAccount"
              type="email"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          ></Stack>
          </Box>

  );
};

export default IdentifyAccountView;
