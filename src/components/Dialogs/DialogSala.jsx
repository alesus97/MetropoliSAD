
import * as React from "react";
import TextField from "@mui/material/TextField";
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
        <CustomTextField
        margin="normal"
        fullWidth
        label="Numero Sala"
        type="number"
        name="numero_sala"
      />
    );
}