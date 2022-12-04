import React, { useState } from "react";
import { Grid, Box, Fab, Card, Typography, CardHeader } from "@mui/material";
import { Skeleton } from "@mui/material";

import { IconButton } from "@mui/material";

import { Add } from "@mui/icons-material";

import CinemaCard from "../../components/Cards/CinemaCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogCinema from "../../components/Dialogs/DialogCinema";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";
import DialogDettagliCinema from "../../components/Dialogs/DialogDettagliCinema";


export default function CinemaView({handleSubmit, handleDelete, loading, cinemas, setOnDeleteIndex }) {
 
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [onExploreIndex, setOnExploreIndex] = useState(0);


  const skeletonArray = Array(10).fill("");
  
  
  return (
    <Box sx={{p:3}} >
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setopenInsertDialog(true)}
      >
        <Add />
      </Fab>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 10, lg: 12 }}
      >
         {loading &&
          skeletonArray.map((item, index) => (
            <Grid item key={index}  xs={2 / 1} sm={8 / 2}  md={10 / 3}
            lg={12 / 4}>
              <Card raised sx={{ maxWidth: 500 }}>
                <Skeleton height={250} variant="rounded">
                </Skeleton>
                <CardHeader
                  title={
                    <Grid container spacing={1}>
                      <Grid item xs={7}>
                        <Typography align="center" variant="h6">
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography align="center" variant="h6">
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                  action={<IconButton></IconButton>}
                />
              </Card>
            </Grid>
          ))} 




        {cinemas &&
          cinemas.map((cinema, index) => (
            <Grid
              item
              key={cinema.codice_cinema}
              xs={2 / 1}
              sm={8 / 2}
              md={10 / 3}
              lg={12 / 4}
            >
              <CinemaCard
                info={cinema}
                onDeleteAction={() => {
                  setOnDeleteIndex(index);
                  setopenConfirmDeleteDialog(true);
                }}
                openExploreAction={() => {
                  setOpenDetailsDialog(true);
                  setOnExploreIndex(index);
                }}
              ></CinemaCard>
            </Grid>
          ))}
      </Grid>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci nuovo cinema"
      >
        <DialogCinema />
      </InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare il cinema?"
      >
        <DialogConfermaEliminazione />
      </InsertFormDialog>
              
      {(cinemas.length > 0 && cinemas[onExploreIndex] !== undefined)  && 
      <DialogDettagliCinema
        openDialog={openDetailsDialog}
        setCloseDialog={() => setOpenDetailsDialog(false)}
        info = {cinemas[onExploreIndex]}
      ></DialogDettagliCinema>}
      
      <Box height={70}></Box>
    </Box>
  );
}
