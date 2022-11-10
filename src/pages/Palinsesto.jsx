import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton } from "@mui/material";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import InsertSpettacoloFormDialog from "../components/InsertSpettacoloFormDialog";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertFilmFormDialog from "../components/InsertFilmFormDialog";

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

  // () => {console.log(spettacoli[index])}
  const handleDelete = (index) => {
    console.log(spettacoli[index])
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
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/spettacoli`
      )
      .then((res) => {
        setSpettacoli(res.data);
      });
  }, []);

  return (
    <Box sx={{ width: "70%", ml: "25%", mt: "5%" }}>
      <Fab color="primary" aria-label="add" onClick={() => setOpenDialog(true)}>
        <AddIcon />
      </Fab>

      <InsertSpettacoloFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAddSpettacolo={addSpettacolo}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titolo</TableCell>
              <TableCell align="center">Sala</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Prezzo</TableCell>
              <TableCell align="center">Elimina</TableCell>
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
    </Box>
  );
}
