
import InsertFormDialog from "../components/InsertFormDialog";

import DialogQuestion from "../components/Dialogs/DialogQuestion";
import DialogConfermaEliminazione from "../components/Dialogs/DialogConfermaEliminazione";


import {Delete, Add} from "@mui/icons-material";
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
  Typography,
  Skeleton

} from "@mui/material";

import { useLocation } from "react-router-dom";


export default function Questions({handleSubmit, handleDelete, loading, questions, setOnDeleteIndex }) {
  
    const location = useLocation()
    const { filmTitle } = location.state

    const [openInsertDialog, setopenInsertDialog] = React.useState(false);
    const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);



  const skeletonArray = Array(5).fill('');

  return (
    <Box>

      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setopenInsertDialog(true)}>
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title={`Inserisci nuova domanda per "${filmTitle}"`}
      ><DialogQuestion/></InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare la domanda?"
      ><DialogConfermaEliminazione/></InsertFormDialog>

  <Typography variant="h5" color="primary" align="center" >{filmTitle}</Typography>
    <p></p>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow height={70} >
              <TableCell component="th" scope="row" width="30%">Question</TableCell>
              <TableCell align="center" width="10%">Answer 1</TableCell>
              <TableCell align="center" width="10%">Answer 2</TableCell>
              <TableCell align="center" width="10%">Answer 3</TableCell>
              <TableCell align="center" width="10%">Correct Answer</TableCell>
              <TableCell align="center" width="10%">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

           {loading &&
            skeletonArray.map((item, index) => (
              <TableRow   height={70}
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
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <IconButton> <Delete color="background"/> </IconButton>
                </TableCell>
              </TableRow>
            ))} 


          {questions &&
            questions.map((question, index) => (
              <TableRow  height={70}
                key={index}
              >
                <TableCell component="th" scope="row"> {question.testo} </TableCell>
                <TableCell align="center"> {question.risposta_errata_1} </TableCell>
                <TableCell align="center"> {question.risposta_errata_2} </TableCell>
                <TableCell align="center"> {question.risposta_errata_3} </TableCell>
                <TableCell align="center"> {question.risposta_corretta} </TableCell>
                <TableCell align="center" >  <IconButton onClick={() => {setOnDeleteIndex(index); setopenConfirmDeleteDialog(true)}}> <Delete color="primary" /> </IconButton> </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      <p />
    </Box>
  );
}
