import React, { useState, useEffect } from "react";
import FilmCard from "../components/Card";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import InserFilmFormDialog from "../components/InsertFilmFormDialog";

export default function Film() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film")
      .then((res) => {
        const films = res.data;
        setFilms(films);
        console.log(films);
      });
  }, []);
  const handleDeleteFilm = (index) => {
    const dataDelete = [...films];
    dataDelete.splice(index, 1);
    setFilms([...dataDelete]);
    //console.log("sto grandissimo cazzo!");
  };

  return (

      <Container maxWidth={false} sx={{ml:"20%", mt:"5%", maxWidth:"80%"}}>
      <InserFilmFormDialog />
        <Grid  jualistify="center" container spacing={3}>
          {films.map((info, index) => (
            <Grid item key={info.codice_film} xs={12} md={6} lg={3}>
              <FilmCard
                info={info}
                onDeleteAction={() => handleDeleteFilm(index)}
              ></FilmCard>
            </Grid>
          ))}
        </Grid>
      </Container>
   );
}
