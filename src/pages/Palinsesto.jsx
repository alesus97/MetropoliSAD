import React from "react";
import { useState, useEffect } from "react";
import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Fab

} from "@mui/material";



import axios from "axios";
import { Delete } from "@mui/icons-material";

import AddIcon from "@mui/icons-material/Add";
import InsertFormDialog from "../components/InsertFormDialog";


export default function BasicTable() {
  const [spettacoli, setSpettacoli] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);


  const addSpettacolo = (spettacolo) => {
    const newSpettacoli = [...spettacoli]
    newSpettacoli.push(spettacolo)
    setSpettacoli(newSpettacoli)
  }

  const handleDelete = (index) => {

    const codiceSpettacolo = spettacoli[index].codice_spettacolo;
    axios
      .delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo/${codiceSpettacolo}`
      )
      .then((res) => {
        const dataDelete = [...spettacoli];
        dataDelete.splice(index,1);
        setSpettacoli([...dataDelete]);
        console.log("Spettacolo cancellato correttamente");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages(["Update failed! Server error"]);
        setIserror(true);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/spettacoli`)
      .then((res) => {
        setSpettacoli(res.data);
      });
  }, []);

  return (
    <Box >
      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setOpenDialog(true)}>
        <AddIcon />
      </Fab>

      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAddSpettacolo={addSpettacolo}
        formType="spettacolo"
      />

      <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Hall</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spettacoli.map((spettacolo, index) => (
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
                  <IconButton onClick={() => handleDelete(index)}>
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
