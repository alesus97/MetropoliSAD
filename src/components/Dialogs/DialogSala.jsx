
import * as React from "react";
import {
  TextField,
   Box
  } from "@mui/material";




export default function DialogSala(){
    return(
      <Box> 
        <TextField
        margin="normal"
        fullWidth
        data-cy="numero_sala"
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
      data-cy="numero_file"
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
      data-cy="numero_posti_per_fila"
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