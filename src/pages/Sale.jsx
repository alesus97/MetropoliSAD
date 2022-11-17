import * as React from "react";
import { useState, useEffect } from "react";
import {Grid} from "@mui/material";

import { Box } from "@mui/material";
import axios from "axios";
import SalaCard from "../components/SalaCard";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertFormDialog from "../components/InsertFormDialog";

export default function Sale() {
  const [sale, setSale] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [iserror, setIserror] = useState(false);


  const handleDeleteSala = (index) => {

     const idSala = sale[index].id_sala;
    
      axios
        .delete(
          `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/sala/${idSala}`
        )
        .then((res) => {
          const dataDelete = [...sale];
          dataDelete.splice(index, 1);
          setSale([...dataDelete]);
          console.log("Sala cancellata correttamente");
        })
        .catch((error) => {
          console.log(error);
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
        });     
  
    };


  const addSala = (postData, response, viewData) => {


    const newSala={
      id_sala: response.data.id_sala,
      numero_sala: postData.numeroSala,
      capienza: viewData.capienza
    }

    const newSale = [...sale];
    newSale.push(newSala);
    setSale(newSale);
  };

  useEffect(() => {
    axios
      .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`)
      .then((res) => {
        setSale(res.data);
      });
  }, []);

  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>

      <Grid jualistify="center" container spacing={3}>
        {sale.map((sala, index) => (
          <Grid item key={sala.id_sala} xs={12} md={6} lg={4}>
            <SalaCard
              info={sala}
               onDeleteAction={() => handleDeleteSala(index)}
            ></SalaCard>
          </Grid>
        ))}
      </Grid>

      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        onAdd={addSala}
        formType="sala"
      />
    </Box>
  );
}
