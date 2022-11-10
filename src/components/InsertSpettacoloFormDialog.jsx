import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, Select } from "@mui/material";
import { styled } from "@mui/styles";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Fab, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment} from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

export default function InsertSpettacoloFormDialog(props) {
  const [film, setFilm] = useState([]);
  const [sale, setSale] = useState([]);

  const handleClose = () => {
    props.setCloseDialog();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);

    console.log({
      film: data.get("film"),
      data: data.get("data"),
      sala: data.get("sala")
    });
  };

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

  const [currency] = React.useState("DATA");

  return (
    <div>
      <Dialog
        open={props.openDialog}
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
      >
        <DialogTitle align="center">Inserisci Spettacolo</DialogTitle>
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                "& .MuiTextField-root": { width: "50ch" },
              }}
            >
              <CustomTextField
                variant="standard"
                margin="normal"
                defaultValue=""
                select
                name="film"
                fullWidth
                label="Seleziona Film"
              >
                {film.map((film, index) => (
                  <MenuItem key={index} value={film.codice_film}>
                    {film.titolo}
                  </MenuItem>
                ))}
              </CustomTextField>
               
            
              <CustomTextField
                variant="standard"
                margin="normal"
                defaultValue=""
                select
                name="sala"
                fullWidth
                label="Seleziona Sala"
              >
                {sale.map((sala, index) => (
                  <MenuItem key={index} value={sala.id_sala}>
                    {sala.numero_sala}
                  </MenuItem>
                ))}
              </CustomTextField>

              <CustomTextField 
              label="Data di uscita"
              id="standard-start-adornment"
              InputProps={{
                startAdornment: <InputAdornment position="start"/>,
              }}
              variant="standard"
              type="datetime-local"
              fullWidth
              margin="normal"
              name="data"/>

              <CustomTextField variant="standard" margin="normal" fullWidth label="Prezzo biglietto" type="number" name="data" />



              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Ok</Button>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
