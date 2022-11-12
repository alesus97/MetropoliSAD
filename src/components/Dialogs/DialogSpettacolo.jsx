import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/styles";
import axios from "axios";
import { useEffect } from "react";
import { MenuItem } from "@mui/material";

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
    <CustomTextField
    margin="normal"
    defaultValue=""
    select
    name="film"
    fullWidth
    label="Seleziona Film"
    required
  >
    {film.map((film, index) => (
      <MenuItem key={index} value={JSON.stringify(film)}>
        {film.titolo}
      </MenuItem>
    ))}
  </CustomTextField>

  <CustomTextField
    margin="normal"
    defaultValue=""
    select
    name="sala"
    fullWidth
    label="Seleziona Sala"
    required
  >
    {sale.map((sala, index) => (
      <MenuItem key={index} value={JSON.stringify(sala)}>
        {sala.numero_sala}
      </MenuItem>
    ))}
  </CustomTextField>

  <CustomTextField
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

  />

  <CustomTextField
    margin="normal"
    fullWidth
    label="Prezzo biglietto"
    type="number"
    name="prezzo"
    required
  />

</Box>
);
}