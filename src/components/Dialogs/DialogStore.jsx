import * as React from "react";

import {
  Box, 
  TextField
} from "@mui/material";

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