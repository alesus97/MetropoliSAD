import * as React from "react";
import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import axios from "axios";
import CardSala from "../components/CardSala"
import { Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertFormDialog from "../components/InsertFormDialog";



export default function BasicTable() {
const [sale, setSale] = useState([]);
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
  
      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAddSala={addSala}
        formType="sala"
        />
      
      <CardSala/>
    </Box>
  );
}
