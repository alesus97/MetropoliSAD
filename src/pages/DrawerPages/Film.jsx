import React, { useState, useEffect } from "react";
import FilmCard from "../../components/Cards/FilmCard";
import axios from "axios";
import { Grid, Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertFormDialog from "../../components/InsertFormDialog";

export default function Film(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [films, setFilms] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [iserror, setIserror] = useState(false);
 
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

  const addFilm = (jsonData, response, viewData) => {

    const newFilm = {
      codice_film: response.data.codice_film,
      titolo: viewData.titolo,
      genere: viewData.genere,
      cast: viewData.cast,
      regia: viewData.regia,
      produttore: viewData.produttore,
      data_uscita: viewData.data_uscita,
      durata: viewData.durata,
      trama: viewData.trama,
      image_url: viewData.image_url
    };


    const newFilms = [...films]
    newFilms.unshift(newFilm)
    setFilms(newFilms)
  }

  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>

      <InsertFormDialog
      openDialog={openDialog}
      setCloseDialog={() => setOpenDialog(false)}
      onAdd={addFilm}
      formType="film"
      ></InsertFormDialog>

      <Grid jualistify="center" container spacing={4} >
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