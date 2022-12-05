import React from "react";
import {TextField } from "@mui/material";


const IdentifyAccountView = () => {

  return (
        
            <TextField
              fullWidth
              margin="normal"
              label="Identify Account"
              required
              autoComplete="Identify Account"
              name="identifyAccount"
              type="email"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

  );
};

export default IdentifyAccountView;
