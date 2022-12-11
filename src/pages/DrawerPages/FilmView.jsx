import React, { useState } from "react";

import FilmCard from "../../components/Cards/FilmCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogFilm from "../../components/Dialogs/DialogFilm";

import { 
  Grid, 
  Fab, 
  Box, 
  Card, 
  Skeleton
} from "@mui/material";

import { Add } from "@mui/icons-material";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";
import DialogDettagliFilm from "../../components/Dialogs/DialogDettagliFilm";



export default function FilmView({handleSubmit, handleDelete, loading, films, setOnDeleteIndex}) {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);
  const [onExploreIndex, setOnExploreIndex] = useState(0);

  const skeletonArray = Array(12).fill("");

  

  return (
    <Box sx={{p:3}}>
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
      ><DialogConfermaEliminazione onDeleteMessage="L'eliminazione di un film comporta l'eliminazione di tutti gli spettacoli ad esso associati"/></InsertFormDialog>

      {(films.length > 0 && films[onExploreIndex] !== undefined)  && 
      <DialogDettagliFilm
        openDialog={openDetailsDialog}
        setCloseDialog={() => setOpenDetailsDialog(false)}
        info = {films[onExploreIndex]}
      ></DialogDettagliFilm>}


<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 10, lg:12, xl:12 }} >
      {films &&
        films.map((info, index) => (       
          <Grid item key={info.codice_film} xs={2/2} sm={8/3} md={10/4} lg={12/5} xl={12/6} data-cy={"filmCard-"+info.titolo} >
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
