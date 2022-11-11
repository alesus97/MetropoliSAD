import React, { useState, useEffect } from "react";
import FilmCard from "../components/Card";
import axios from "axios";
import { Grid, Fab, Box } from "@mui/material";
import InsertFilmFormDialog from "../components/InsertFilmFormDialog";
import AddIcon from "@mui/icons-material/Add";

export default function Film() {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [films, setFilms] = useState([]);

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
        console.log(films);
      });
  }, []);

  // const handleDeleteFilm = (index) => {
  //   const dataDelete = [...films];
  //   dataDelete.splice(index, 1);
  //   setFilms([...dataDelete]);
  // };

  const addFilm = (newFilm) => {
    console.log(newFilm)
    const newFilms = [...films]
    newFilms.push(newFilm)
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

      <InsertFilmFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAddFilm={addFilm}
      />
      <Grid jualistify="center" container spacing={3}>
        {films.map((info, index) => (
          <Grid item key={info.codice_film} xs={12} md={6} lg={4}>
            <FilmCard
              info={info}
              // onDeleteAction={() => handleDeleteFilm(index)}
            ></FilmCard>
          </Grid>
        ))}
      </Grid>
      <p></p>
    </Box>
  );
}
