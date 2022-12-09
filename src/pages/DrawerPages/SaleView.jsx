import React from "react";

import { 
  Grid, 
  Box, 
  Fab, 
  Card, 
  Typography, 
  CardHeader, 
  Skeleton, 
  IconButton 
} from "@mui/material";

import { Add } from "@mui/icons-material";

import SalaCard from "../../components/Cards/SalaCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogSala from "../../components/Dialogs/DialogSala";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";


export default function SaleView({handleSubmit, handleDelete, loading, sale, setOnDeleteIndex }) {
 
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);


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




        {sale &&
          sale.map((sala, index) => (
            <Grid
              item
              key={sala.id_sala}
              xs={2 / 1}
              sm={8 / 2}
              md={10 / 3}
              lg={12 / 4}
            >
              <SalaCard
                info={sala}
                onDeleteAction={() => {
                  setOnDeleteIndex(index);
                  setopenConfirmDeleteDialog(true);
                }}
              ></SalaCard>
            </Grid>
          ))}
      </Grid>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci nuova sala"
      >
        <DialogSala />
      </InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare la sala?"
      >
        <DialogConfermaEliminazione onDeleteMessage="L'eliminazione di una sala comporta l'eliminazione di tutti gli spettacoli ad essa associati" />
      </InsertFormDialog>
      <Box height={70}></Box>
    </Box>
  );
}
