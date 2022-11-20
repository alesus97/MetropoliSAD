import React, { useState, useEffect } from "react";
import axios from "axios";

import FilmCard from "../../components/Cards/FilmCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogFilm from "../../components/Dialogs/DialogFilm";

import { Grid, Fab, Box, Card, Skeleton, CardActions, IconButton, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";
import DialogDettagliFilm from "../../components/Dialogs/DialogDettagliFilm";


export default function Film(props) {
  const [onDeleteIndex,setOnDeleteIndex] = useState();
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);
  const [films, setFilms] = useState([]);


  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [onExploreIndex, setOnExploreIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  const skeletonArray = Array(12).fill("");

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
      newFilms.push(newFilm);
      setFilms(newFilms);
    } catch(error) {
      throw error
    } 

  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const codiceFilm = films[onDeleteIndex].codice_film;
    
    try {
      const response = await axios.delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film/${codiceFilm}`
      );
      const dataDelete = [...films];
      dataDelete.splice(onDeleteIndex, 1);
      setFilms([...dataDelete]);
      console.log("Film cancellato correttamente");

    } catch(error) {
      throw error
    } 
    
  };

  useEffect(() => {
    axios
      .get("https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film")
      .then((res) => {
        const films = res.data;
        setFilms(films);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setopenInsertDialog(true)}
      >
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci dettagli film"
      ><DialogFilm/></InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare il film?"
      ><DialogConfermaEliminazione/></InsertFormDialog>

      {films.length > 0 && 
      <DialogDettagliFilm
        openDialog={openDetailsDialog}
        setCloseDialog={() => setOpenDetailsDialog(false)}
        info = {films[onExploreIndex]}
      ></DialogDettagliFilm>}


<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 10, lg:12, xl:12 }} >
      {films &&
        films.map((info, index) => (       
          <Grid item key={info.codice_film} xs={2/2} sm={8/3} md={10/4} lg={12/5} xl={12/6}>
            <FilmCard
              info={info}
              onDeleteAction={() => {setOnDeleteIndex(index); setopenConfirmDeleteDialog(true)}}
              openExploreAction={() => {setOpenDetailsDialog(true); setOnExploreIndex(index);}}
            ></FilmCard>
          </Grid>
        ))
      }

      {loading &&
        skeletonArray.map((info, index) => (
          <Grid item key={index} xs={2/2} sm={8/3} md={10/4} lg={12/5} xl={12/6}>
             <Card raised sx={{ maxWidth: "450px", height: "100%" }}>
              <Skeleton height={405.5} variant="rounded"></Skeleton>
              
             </Card>
          </Grid>
        ))
      }
      </Grid>








      <Box height={70}></Box>
    </Box>
    
  );
}
