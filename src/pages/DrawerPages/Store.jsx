
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";
import { useParams } from "react-router-dom";
import DialogQuestion from "../../components/Dialogs/DialogQuestion";
import DialogStore from "../../components/Dialogs/DialogStore";

import {Delete, Add} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios"
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

} from "@mui/material";

import { useLocation } from "react-router-dom";
import {Skeleton} from "@mui/material";

export default function Store(){
    const [prizes, setPrizes] =useState();
    const [loading, setLoading] = useState(true);

    const [onDeleteIndex,setOnDeleteIndex] = useState();
    const [openInsertDialog, setopenInsertDialog] = React.useState(false);
    const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postData = {
            premio: data.get("premio"),
            crediti: data.get("crediti"),

          };
    
          try {
            const response = await axios.post(
              `/quiVaIlLink`,
              postData
            );
    
            const newPrize = {
             
            };
      
            const newPrizes = [...prizes];
            newPrizes.push(newPrize);
            setPrizes(newPrizes);
    
        } catch(error) {
          throw error
        } 

    }


    useEffect(() => {
        axios
          .get(`https://637fa4675b1cc8d6f94c16b5.mockapi.io/store`)
          .then((res) => {
            const prizes = res.data;
            setPrizes(prizes);
             console.log(prizes);
             setLoading(false);
          });
      }, []);

      const handleDelete = async (event) => {
        event.preventDefault();
        const codiceDomanda = prizes[onDeleteIndex].codice_domanda;
    
        try {
          const response = await axios.delete(
            `/quiVaIlLink`
          );
            const dataDelete = [...prizes];
            dataDelete.splice(onDeleteIndex, 1);
            setPrizes([...dataDelete]);
            console.log("Premio cancellato correttamente");
    
        } catch(error) {
          throw error
        } 
       
       };
    


      const skeletonArray = Array(5).fill('');
    return(
        <Box>

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
      ><DialogConfermaEliminazione/></InsertFormDialog>

      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow height={70} >
              <TableCell component="th" scope="row" width="30%">Premio</TableCell>
              <TableCell align="center" width="10%">Punti necessari</TableCell>
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
                  <IconButton> <Delete color="background"/> </IconButton>
                </TableCell>
              </TableRow>
            ))} 


          {prizes &&
            prizes.map((prize, index) => (
              <TableRow  height={70}
                key={index}
              >
                <TableCell component="th" scope="row"> {prize.nome} </TableCell>
                <TableCell align="center"> {prize.crediti} </TableCell>
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