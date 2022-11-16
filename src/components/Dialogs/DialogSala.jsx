
import * as React from "react";
import {TextField, Box} from "@mui/material";




export default function DialogSala(){
    return(
      <Box> 
        <TextField
        margin="normal"
        fullWidth
        label="Numero Sala"
        type="number"
        name="numero_sala"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
      margin="normal"
      fullWidth
      label="Numero File"
      type="number"
      name="numero_file"
      sx={{"& fieldset": {
        borderColor: "white",
      },}}
    />
       <TextField
      margin="normal"
      fullWidth
      label="Numero Posti per fila"
      type="number"
      name="postiPerFila"
      sx={{"& fieldset": {
        borderColor: "white",
      },}}
    />
    </Box>
    );
}