import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Fab, InputAdornment, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/styles";
import axios from "axios";

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

export default function InsertFilmFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setCloseDialog();
  };

  const handleSubmit = (event) => {
    setIsDisabled(true)
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
      // locandina: data.get("locandina"),
    }

    axios.post(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`,
    newFilm)
    .then((response)=>{

     

      const newFilm2 = {
        codice_film: 100,
        titolo: data.get("titolo"),
        genere: data.get("genere"),
        cast: data.get("cast"),
        regia: data.get("regia"),
        produttore: data.get("produttore"),
        data_uscita: data.get("data"),
        durata: data.get("durata"),
        trama: data.get("trama"),
        // locandina: data.get("locandina"),
      }

      console.log(newFilm2);
      props.onAddFilm(newFilm2);
      
     
      setIsDisabled(false)
      handleClose();
      setIserror(false);
      setErrorMessages([]);
    }).catch((error)=>{
      console.log(error)
      setErrorMessages(["Update failed! Server error"]);
      setIserror(true);
    })


    setIsDisabled(false)
  };

  return (
    <div>


      <Dialog open={props.openDialog} fullWidth maxWidth="sm" onClose={handleClose}>
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

              <p></p>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" type="submit" disabled={isDisabled} >
                  Ok
                </Button>
                <Button variant="outlined" onClick={handleClose} >
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
