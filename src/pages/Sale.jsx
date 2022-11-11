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

function createData() {
  return { };
}

export default function BasicTable() {
const [spettacoli, setSpettacoli] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  

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
        <InsertSaleFormDialog/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numero sala</TableCell>
              <TableCell align="center">Capienza</TableCell>
              {/* <TableCell align="center">Posti</TableCell>
              <TableCell align="center">Prezzo</TableCell>
              <TableCell align="center">Elimina</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {spettacoli.map((spettacolo, index) => (
              <TableRow
                key={spettacolo.codice_spettacolo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {spettacolo.film.titolo} {/*MODIFICA CON L'API DI SALA*/}
                </TableCell>
                <TableCell align="center">
                  {spettacolo.sala.numero_sala} {/*MODIFICA CON L'API DI SALA*/}
                </TableCell>
                {/* <TableCell align="center">{spettacolo.data}</TableCell>
                <TableCell align="center">{spettacolo.prezzo}</TableCell> */}

                {/* <TableCell align="center">
                  <IconButton onClick={() => {console.log(spettacoli[index])}}>
                    <Delete  color="primary"/>
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
