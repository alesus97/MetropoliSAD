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
import InsertSaleFormDialog from "../components/InsertSaleFormDialog";
import CardSala from "../components/CardSala"
import { Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function createData() {
  return { };
}

const addSala = (sale) => {
  const newSala = [...sale]
  newSpettacoli.push(spettacolo)
  setSpettacoli(newSpettacoli)
}

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
    <Box>
       <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setOpenDialog(true)}>
        <AddIcon />
      </Fab>
        <InsertSaleFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAddSala={addSala}
        />
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numero sala</TableCell>
              <TableCell align="center">Capienza</TableCell>
              <TableCell align="center">Posti</TableCell>
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
      </TableContainer> */}
      <CardSala/>
    </Box>
  );
}
