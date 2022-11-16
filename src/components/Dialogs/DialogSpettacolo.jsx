import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { MenuItem } from "@mui/material";




export default function DialogSpettacolo(){
    const [film, setFilm] = useState([]);
    const [sale, setSale] = useState([]);
    useEffect(() => {
        axios
          .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`)
          .then((res) => {
            setFilm(res.data);
          });
      }, []);
    
      useEffect(() => {
        axios
          .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`)
          .then((res) => {
            setSale(res.data);
          });
      }, []);
    return(
    <Box> 
    <TextField
    margin="normal"
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
    {film.map((film, index) => (
      <MenuItem key={index} value={JSON.stringify(film)}>
        {film.titolo}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    margin="normal"
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
      <MenuItem key={index} value={JSON.stringify(sala)}>
        {sala.numero_sala}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    label="Data spettacolo"
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