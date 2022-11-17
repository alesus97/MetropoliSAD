
import React, { useState, useEffect } from "react";
import { Grid, Box, Fab, Card, Typography, CardHeader } from "@mui/material";
import {Skeleton} from "@mui/material";
import axios from "axios";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

import {Add} from "@mui/icons-material";

import SalaCard from "../../components/Cards/SalaCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogSala from "../../components/Dialogs/DialogSala";

export default function Sale() {
  const [sale, setSale] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
      numeroSala: data.get("numero_sala"),
      numeroFile: Number(data.get("numero_file")),
      postiPerFila: Number(data.get("postiPerFila")),
    };

    try {
      const response = await axios.post(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sala`,
        postData
      );

      console.log(response);

      const newSala = {
        id_sala: response.data.id_sala,
        numero_sala: data.get("numero_sala"),
        capienza: Number(data.get("postiPerFila") * data.get("numero_file")),
      };

      console.log(newSala);

      const newSale = [...sale];
      newSale.push(newSala);
      setSale(newSale);
    } catch (error) {
      throw error;
    }
  };

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

  useEffect(() => {
    axios
      .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`)
      .then((res) => {
        setSale(res.data);
        setLoading(false);
      });
  }, []);

  const skeletonArray = Array(10).fill('');
  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setOpenDialog(true)}
      >
        <Add />
      </Fab>

   
      <Grid jualistify="center" container spacing={3}>

      {loading &&
            skeletonArray.map((item, index) => (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <Card raised sx={{ maxWidth: 500}}>
                  <Skeleton height={250} variant="rounded" >  </Skeleton>
                  <CardHeader
        title={
            <Grid container spacing={1}>
            <Grid item xs={7}>
              <Typography align="center" variant="h6" > </Typography>
            </Grid>
            <Grid item >
              <Typography align="center" variant="h6" > </Typography>
            </Grid>
          </Grid>  
        }
        action={
          <IconButton>
          
          </IconButton>
        }
       
      />
                 
                </Card>
            </Grid>
              ))} 




      {sale &&      
        sale.map((sala, index) => (
          <Grid item key={sala.id_sala} xs={12} md={6} lg={4}>
            <SalaCard
              info= {sala}
              onDeleteAction= {() => handleDeleteSala(index)}
            ></SalaCard>
          </Grid>
        ))}
      </Grid>

      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        handleSubmit={handleSubmit}
        title="Inserisci nuova sala"
      >
        <DialogSala />
      </InsertFormDialog>
    </Box>
  );
}
