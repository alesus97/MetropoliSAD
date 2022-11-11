
import * as React from "react";
import {TextField, Box} from "@mui/material";
import { styled } from "@mui/styles";



const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
    },
    "&   .MuiSelect-icon": {
      color: "#F9D159",
    },
  });


export default function DialogSala(){
    return(
      <Box> 
        <CustomTextField
        margin="normal"
        fullWidth
        label="Numero Sala"
        type="number"
        name="numero_sala"
      />
      <CustomTextField
      margin="normal"
      fullWidth
      label="Numero File"
      type="number"
      name="numero_file"
    />
       <CustomTextField
      margin="normal"
      fullWidth
      label="Numero Posti per fila"
      type="number"
      name="postiPerFila"
    />
    </Box>
    );
}