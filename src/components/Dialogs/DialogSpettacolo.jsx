import * as React from "react";

import {
  MenuItem, 
  Box, 
  InputAdornment, 
  TextField  
} from "@mui/material";


export default function DialogSpettacolo({films, sale}){

    return(
    <Box> 
    <TextField
    margin="normal"
    data-cy="selFilm"
    defaultValue=""
    select
    name="film"
    fullWidth
    label="Seleziona Film"
    required
    sx={{"& fieldset": {
      borderColor: "white",
    }, "&   .MuiSelect-icon": {
      color: "#F9D159",
    },}}
  >
    {films.map((film, index) => (
      <MenuItem key={index} value={JSON.stringify(film)} data-cy={"sceltaFilm-"+film.titolo}>
        {film.titolo}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    margin="normal"
    data-cy="selSala"
    defaultValue=""
    select
    name="sala"
    fullWidth
    label="Seleziona Sala"
    required
    sx={{"& fieldset": {
      borderColor: "white",
    }, "&   .MuiSelect-icon": {
      color: "#F9D159",
    }
  
  }}
  >
    {sale.map((sala, index) => (
      <MenuItem key={index} value={JSON.stringify(sala)} data-cy={"sceltaSala-"+sala.numero_sala}>
        {sala.numero_sala}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    label="Data spettacolo"
    data-cy="data_spettacolo"
    id="standard-start-adornment"
    InputProps={{
      startAdornment: <InputAdornment position="start" />,
    }}
    type="datetime-local"
    fullWidth
    margin="normal"
    name="data"
    required
    sx={{"& fieldset": {
      borderColor: "white",
    },
  }}

  />

  <TextField
    margin="normal"
    data-cy="prezzo_biglietto"
    fullWidth
    label="Prezzo biglietto"
    type="number"
    name="prezzo"
    required
    sx={{"& fieldset": {
      borderColor: "white",
    },}}
  />

</Box>
);
}