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
import { InputAdornment } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
  '&   .MuiSelect-icon':{
    color:"#F9D159"
}
});

export default function InsertSpettacoloFormDialog(props) {
  const [film, setFilm] = useState([]);
  const [sale, setSale] = useState([]);

  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = () => {
    props.setCloseDialog();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const jsonData = {
      codice_film: JSON.parse(data.get("film")).codice_film,
      id_sala: JSON.parse(data.get("sala")).id_sala,
      data_ora: data.get("data"),
      prezzo: data.get("prezzo"),
    };

;

    axios
      .post(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo`,
        jsonData
      )
      .then((response) => {
       
        const sala = JSON.parse(data.get("sala"));
        const film = JSON.parse(data.get("film"));
       
        const newSpettacolo = {
          codice_spettacolo: response.data.codice_spettacolo,
          data: data.get("data").replace(/T/," "),
          prezzo: data.get("prezzo"),
          sala: {
            id_sala: sala.id_sala,
            numero_sala: sala.numero_sala,
          },
          film: {
            codice_film: film.codice_film,
            titolo: film.titolo,
            durata: film.durata,
          },
        };

        props.onAddSpettacolo(newSpettacolo);

        console.log(newSpettacolo);
        handleClose();
        setIserror(false);
        setErrorMessages([]);
      })
      .catch((error) => {
        setErrorMessages(["Update failed! Server error"]);
        setIserror(true);

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
                margin="normal"
                defaultValue=""
                select
                name="film"
                fullWidth
                label="Seleziona Film"
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
              />

              <CustomTextField
                margin="normal"
                fullWidth
                label="Prezzo biglietto"
                type="number"
                name="prezzo"
              />

              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Ok</Button>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
