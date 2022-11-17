import React, { useState, useEffect } from "react";
import axios from "axios";

import FilmCard from "../../components/Cards/FilmCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogFilm from "../../components/Dialogs/DialogFilm";

import { Grid, Fab, Box } from "@mui/material";
import { Add } from "@mui/icons-material";


export default function Film(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [films, setFilms] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [iserror, setIserror] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
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

     try {
      const response = await axios.post(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`,
        postData
      );
      console.log(response);

      const newFilm = {
        codice_film: response.data.codice_film,
        ...postData,
      };

      const newFilms = [...films];
      newFilms.unshift(newFilm);
      setFilms(newFilms);
    } catch(error) {
      throw error
    } 

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film")
      .then((res) => {
        const films = res.data;
        setFilms(films);
        //  console.log(films);
      });
  }, []);

  const handleDeleteFilm = (index) => {
    // console.log(films[index])

    const codiceFilm = films[index].codice_film;
    axios
      .delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film/${codiceFilm}`
      )
      .then((res) => {
        const dataDelete = [...films];
        dataDelete.splice(index, 1);
        setFilms([...dataDelete]);
        console.log("Film cancellato correttamente");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages(["Update failed! Server error"]);
        setIserror(true);
      });
  };

  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setOpenDialog(true)}
      >
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        handleSubmit={handleSubmit}
        title="Inserisci dettagli film"
      ><DialogFilm/></InsertFormDialog>

      <Grid jualistify="center" container spacing={4}>
        {films.map((info, index) => (
          <Grid item key={info.codice_film} xs={12} md={6} lg={2}>
            <FilmCard
              info={info}
              onDeleteAction={() => handleDeleteFilm(index)}
            ></FilmCard>
          </Grid>
        ))}
      </Grid>
      <p></p>
    </Box>
  );
}
