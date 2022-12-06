
import React from "react";

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Fab,
  Skeleton,

} from "@mui/material";

import InsertFormDialog from "../../components/InsertFormDialog";
import DialogSpettacolo from "../../components/Dialogs/DialogSpettacolo";

import { Delete, Add } from "@mui/icons-material";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";


export default function PalinsestoView({handleSubmit, handleDelete, loading, spettacoli, setOnDeleteIndex, films, sale }) {

  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);
  
  const skeletonArray = Array(5).fill('');

 
  return (
    <Box sx={{p:3}}>
      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setopenInsertDialog(true)}>
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci dettagli spettacolo"
      ><DialogSpettacolo films={films} sale={sale}/></InsertFormDialog>


      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare lo spettacolo?"
      ><DialogConfermaEliminazione onDeleteMessage="L'azione non potrà essere annullata"/></InsertFormDialog>

      <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow height={70} >
              <TableCell component="th" scope="row" width="30%">Title</TableCell>
              <TableCell align="center" width="10%">Hall</TableCell>
              <TableCell align="center" width="10%">Date</TableCell>
              <TableCell align="center" width="10%">Price</TableCell>
              <TableCell align="center" width="10%">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


          {loading &&
            skeletonArray.map((item, index) => (
              <TableRow  height={70}
              key={index}>
                <TableCell component="th" scope="row" width="30%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <IconButton> <Delete color="disabled"/> </IconButton>
                </TableCell>
              </TableRow>
            ))} 


            {spettacoli &&
            spettacoli.map((spettacolo, index) => (
              <TableRow
                key={spettacolo.codice_spettacolo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {spettacolo.film.titolo}
                </TableCell>
                <TableCell align="center">
                  {spettacolo.sala.numero_sala}
                </TableCell>
                <TableCell align="center">{spettacolo.data}</TableCell>
                <TableCell align="center">{spettacolo.prezzo}</TableCell>

                <TableCell align="center">
                <IconButton onClick={() => {setopenConfirmDeleteDialog(true); setOnDeleteIndex(index)}}>
                    <Delete color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p/>
    </Box>
  );
}
