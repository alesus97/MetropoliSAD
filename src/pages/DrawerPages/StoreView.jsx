
import React from "react";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";
import DialogStore from "../../components/Dialogs/DialogStore";

import {
  Delete, 
  Add
} from "@mui/icons-material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Fab,
  Skeleton

} from "@mui/material";

export default function StoreView({handleSubmit, handleDelete, loading, prizes, setOnDeleteIndex }){
    const [openInsertDialog, setopenInsertDialog] = React.useState(false);
    const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);

    
      const skeletonArray = Array(5).fill('');
    return(
        <Box sx={{p:3}}>

      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setopenInsertDialog(true)}>
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title={"Inserisci nuovo premio"}
      ><DialogStore/></InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare il premio?"
      ><DialogConfermaEliminazione onDeleteMessage="L'azione non potrà essere annullata"/></InsertFormDialog>

      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow height={70} >
              <TableCell component="th" scope="row" width="30%">Premio</TableCell>
              <TableCell align="center" width="10%">Punti necessari</TableCell>
              <TableCell align="center" width="10%">Elimina</TableCell>
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
                  <IconButton> <Delete color="background"/> </IconButton>
                </TableCell>
              </TableRow>
            ))} 


          {prizes &&
            prizes.map((prize, index) => (
            
              <TableRow  height={70}
                key={index}
              >
                <TableCell component="th" scope="row"> {prize.descrizione} </TableCell>
                <TableCell align="center"> {prize.costo} </TableCell>
                <TableCell align="center" >  <IconButton onClick={() => {setOnDeleteIndex(index); setopenConfirmDeleteDialog(true)}}> <Delete color="primary" /> </IconButton> </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          
        </Table>
      </TableContainer>
    </Box>
    
    );
}