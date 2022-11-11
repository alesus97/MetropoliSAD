import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Container, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/styles";
import axios from "axios";

import DialogSpettacolo from "./Dialogs/DialogSpettacolo";
import DialogFilm from "./Dialogs/DialogFilm";
import DialogSala from "./Dialogs/DialogSala";

export default function InsertFormDialog(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleClose = () => {
    props.setCloseDialog();
  };

  const handleSubmit = (event) => {
    if (props.formType === "film") {
      setIsDisabled(true);
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const newFilm = {
        titolo: data.get("titolo"),
        genere: data.get("genere"),
        cast: data.get("cast"),
        regia: data.get("regia"),
        produttore: data.get("produttore"),
        data_uscita: data.get("data"),
        durata: data.get("durata"),
        trama: data.get("trama"),
        image_url: data.get("locandina"),
      };

      axios
        .post(
          `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`,
          newFilm
        )
        .then((response) => {
          const newFilm2 = {
            codice_film: response.data.codice_film,
            titolo: data.get("titolo"),
            genere: data.get("genere"),
            cast: data.get("cast"),
            regia: data.get("regia"),
            produttore: data.get("produttore"),
            data_uscita: data.get("data"),
            durata: data.get("durata"),
            trama: data.get("trama"),
            image_url: data.get("locandina"),
          };

          props.onAddFilm(newFilm2);

          setIsDisabled(false);
          handleClose();
          setIserror(false);
          setErrorMessages([]);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
        });

      setIsDisabled(false);
    } else if (props.formType === "sala") {
      event.preventDefault();
      const data = new FormData(event.currentTarget);


      const newSala = {
        numeroSala: data.get("numero_sala"),
        numeroFile: Number(data.get("numero_file")),
        postiPerFila: Number(data.get("postiPerFila")),
      };

      console.log(newSala)

      axios
        .post(
          `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sala`,
          newSala
        )
        .then((response) => {
          console.log("Sala creata");

          const newSala2={
            id_sala: response.data.id_sala,
            numero_sala: data.get("numero_sala"),
            capienza: Number( data.get("postiPerFila") *  data.get("numero_file") )
          }

          props.onAddSala(newSala2)

          setIserror(false);
          setErrorMessages([]);
        })
        .catch((error) => {
          console.log(error);
          console.log("ERRORE!")
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
        });
    } else if (props.formType === "spettacolo") {
      setIsDisabled(true);
      event.preventDefault();

      const data = new FormData(event.currentTarget);

      const jsonData = {
        codice_film: JSON.parse(data.get("film")).codice_film,
        id_sala: JSON.parse(data.get("sala")).id_sala,
        data_ora: data.get("data"),
        prezzo: data.get("prezzo"),
      };

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
            data: data.get("data").replace(/T/, " "),
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
          setIsDisabled(false);
          handleClose();
          setIserror(false);
          setErrorMessages([]);
        })
        .catch((error) => {
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
        });
    }
  };

  if (props.formType === "film") {
    return (
      <div>
        <Dialog
          open={props.openDialog}
          fullWidth
          maxWidth="sm"
          onClose={handleClose}
        >
          <DialogTitle align="center">Inserisci dettagli film</DialogTitle>
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
                <DialogFilm />
                <p></p>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Ok
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else if (props.formType === "sala") {
    return (
      <div>
        <Dialog
          open={props.openDialog}
          fullWidth
          maxWidth="sm"
          onClose={handleClose}
        >
          <DialogTitle align="center">Inserisci Sala</DialogTitle>
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
                <DialogSala />

                <p></p>
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" type="submit">
                    Ok
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else if (props.formType === "spettacolo") {
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
              <Box component="form" onSubmit={handleSubmit}>
                <DialogSpettacolo />
                <p></p>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Ok
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
