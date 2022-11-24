import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { MenuItem } from "@mui/material";

export default function DialogStore(){
    return(
        <Box> 
    <TextField
    margin="normal"
    
    name="premio"
    fullWidth
    label="Crea premio"
    required
    sx={{"& fieldset": {
        borderColor: "white",
      }, "&   .MuiSelect-icon": {
        color: "#F9D159",
      }
    
    }}
     />

<TextField
    margin="normal"
    
    name="crediti"
    fullWidth
    label="Crediti necessari"
    required
    sx={{"& fieldset": {
        borderColor: "white",
      }, "&   .MuiSelect-icon": {
        color: "#F9D159",
      }
    
    }}
     />
    
    

  </Box>


    );

}