
import React from "react";
import { InputAdornment,Box, TextField } from "@mui/material";
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
  
export default function DialogSpettacolo(){
    return(
        <Box> 
        <CustomTextField
        margin="normal"
        name="titolo"
        fullWidth
        label="Titolo"
      />
      <CustomTextField
        margin="normal"
        name="genere"
        fullWidth
        label="Genere"
      />
      <CustomTextField
        margin="normal"
        name="cast"
        fullWidth
        label="Cast"
      />
      <CustomTextField
        margin="normal"
        name="regia"
        fullWidth
        label="Regia"
      />
      <CustomTextField
        margin="normal"
        name="produttore"
        fullWidth
        label="Produttore"
      />
      <CustomTextField
        margin="normal"
        defaultValue=""
        name="data"
        fullWidth
        label="Data di uscita"
        type="date"
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
      />
      <CustomTextField
        margin="normal"
        name="durata"
        fullWidth
        label="Durata"
        type="number"
      />

      <CustomTextField
        margin="normal"
        name="trama"
        fullWidth
        label="Trama"
        multiline
      />

      <CustomTextField
        margin="normal"
        name="locandina"
        fullWidth
        label="Link locandina"
        type="url"
      />
      </Box>
    );
}