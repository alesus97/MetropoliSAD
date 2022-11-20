
import React, { useState, useEffect } from "react";
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
  useTheme

} from "@mui/material";

import InsertFormDialog from "../../components/InsertFormDialog";
import DialogSpettacolo from "../../components/Dialogs/DialogSpettacolo";
import axios from "axios";
import { Delete, Add } from "@mui/icons-material";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";


export default function BasicTable() {
  const [spettacoli, setSpettacoli] = useState([]);
  const [onDeleteIndex,setOnDeleteIndex] = useState();
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const skeletonArray = Array(5).fill('');

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sala = JSON.parse(data.get("sala"));
    const film = JSON.parse(data.get("film"));

    const postData = {
      codice_film: film.codice_film,
      id_sala: sala.id_sala,
      data_ora: data.get("data"),
      prezzo: data.get("prezzo"),
    };

    try {
      const response = await axios.post(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo`,
        postData
      );
      
      console.log(response);

      const newSpettacolo = {
        codice_spettacolo: response.data.codice_spettacolo,
        data: data.get("data").replace(/T/, " "),
        prezzo: data.get("prezzo"),
        sala: {
          id_sala: sala.id_sala,
          numero_sala: sala.numero_sala,
        },
        film: {
          codice_film: film.codice_film,
          titolo: film.titolo,
          durata: film.durata,
        },
      };

      const newSpettacoli = [...spettacoli]
      newSpettacoli.push(newSpettacolo)
      setSpettacoli(newSpettacoli)  

    } catch(error) {
      throw error
    } 
  }




  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(onDeleteIndex)
    const codiceSpettacolo = spettacoli[onDeleteIndex].codice_spettacolo;
    
    try {
      const response = await axios.delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo/${codiceSpettacolo}`
      );
        const dataDelete = [...spettacoli];
        dataDelete.splice(onDeleteIndex,1);
        setSpettacoli([...dataDelete]);
        console.log("Spettacolo cancellato correttamente");

    } catch(error) {
      console.log(error)
      throw error
    } 
    
  };

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/spettacoli`)
      .then((res) => {
        setSpettacoli(res.data);
        setLoading(false);
      });
  }, []);



  return (
    <Box >
      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setopenInsertDialog(true)}>
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci dettagli spettacolo"
      ><DialogSpettacolo/></InsertFormDialog>


      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare lo spettacolo?"
      ><DialogConfermaEliminazione/></InsertFormDialog>

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
                  {/* <IconButton onClick={() => handleDelete(index)}> */}
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
