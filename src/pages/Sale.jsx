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



export default function BasicTable() {
const [sale, setSale] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const addSala = (sala) => {
    const newSala = [...sale]
    newSala.push(sala)
    setSale(newSala)
  }

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/spettacoli`
      )
      .then((res) => {
        setSale(res.data);
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
      
      <CardSala/>
    </Box>
  );
}
