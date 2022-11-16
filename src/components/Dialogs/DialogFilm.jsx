
import React from "react";
import { InputAdornment,Box, TextField } from "@mui/material";


export default function DialogFilm(){
    return(
        <Box> 
        <TextField
        margin="normal"
        name="titolo"
        fullWidth
        label="Titolo"
        sx={{"& fieldset": {
          borderColor: "white",
        }}}
      />
      <TextField
        margin="normal"
        name="genere"
        fullWidth
        label="Genere"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
        margin="normal"
        name="cast"
        fullWidth
        label="Cast"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
        margin="normal"
        name="regia"
        fullWidth
        label="Regia"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
        margin="normal"
        name="produttore"
        fullWidth
        label="Produttore"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
        margin="normal"
        defaultValue=""
        name="data"
        fullWidth
        label="Data di uscita"
        type="date"
        InputProps={{
          startAdornment: <InputAdornment position="start" />,
        }}
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      <TextField
        margin="normal"
        name="durata"
        fullWidth
        label="Durata"
        type="number"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />

      <TextField
        margin="normal"
        name="trama"
        fullWidth
        label="Trama"
        multiline
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />

      <TextField
        margin="normal"
        name="locandina"
        fullWidth
        label="Link locandina"
        type="url"
        sx={{"& fieldset": {
          borderColor: "white",
        },}}
      />
      </Box>
    );
}