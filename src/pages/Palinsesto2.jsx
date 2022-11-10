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
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import InsertFilmFormDialog from "../components/InsertFilmFormDialog";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
const [spettacoli, setSpettacoli] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  
  

  

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
        <AddIcon/>
      </Fab> 

      <InsertSpettacoloFormDialog openDialog={openDialog} setCloseDialog={() => setOpenDialog(false)}/>
     

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
                  <IconButton onClick={() => {console.log(spettacoli[index])}}>
                    <Delete  color="primary"/>
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
