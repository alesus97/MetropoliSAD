import React, { useState, useEffect } from "react";
import { Grid, Box, Fab, Card, Typography, CardHeader } from "@mui/material";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { Add } from "@mui/icons-material";

import SalaCard from "../../components/Cards/SalaCard";
import InsertFormDialog from "../../components/InsertFormDialog";
import DialogSala from "../../components/Dialogs/DialogSala";
import DialogConfermaEliminazione from "../../components/Dialogs/DialogConfermaEliminazione";

export default function Sale() {
  const [sale, setSale] = useState([]);
  const [onDeleteIndex, setOnDeleteIndex] = useState();
  const [openInsertDialog, setopenInsertDialog] = React.useState(false);
  const [openConfirmDeleteDialog, setopenConfirmDeleteDialog] =
    React.useState(false);
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

  const handleDelete = async (event) => {
    event.preventDefault();
    const idSala = sale[onDeleteIndex].id_sala;

    try {
      const response = await axios.delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/sala/${idSala}`
      );
      const dataDelete = [...sale];
      dataDelete.splice(onDeleteIndex, 1);
      setSale([...dataDelete]);
      console.log("Sala cancellata correttamente");
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    axios
      .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`)
      .then((res) => {
        setSale(res.data);
        setLoading(false);
      });
  }, []);

  const skeletonArray = Array(10).fill("");
  return (
    <Box>
      <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => setopenInsertDialog(true)}
      >
        <Add />
      </Fab>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 10, lg: 12 }}
      >
        {loading &&
          skeletonArray.map((item, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card raised sx={{ maxWidth: 500 }}>
                <Skeleton height={250} variant="rounded">
                  {" "}
                </Skeleton>
                <CardHeader
                  title={
                    <Grid container spacing={1}>
                      <Grid item xs={7}>
                        <Typography align="center" variant="h6">
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography align="center" variant="h6">
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                  action={<IconButton></IconButton>}
                />
              </Card>
            </Grid>
          ))}

        {sale &&
          sale.map((sala, index) => (
            <Grid
              item
              key={sala.id_sala}
              xs={2 / 1}
              sm={8 / 2}
              md={10 / 3}
              lg={12 / 4}
            >
              <SalaCard
                info={sala}
                onDeleteAction={() => {
                  setOnDeleteIndex(index);
                  setopenConfirmDeleteDialog(true);
                }}
              ></SalaCard>
            </Grid>
          ))}
      </Grid>

      <InsertFormDialog
        openDialog={openInsertDialog}
        setCloseDialog={() => setopenInsertDialog(false)}
        handleOK={handleSubmit}
        title="Inserisci nuova sala"
      >
        <DialogSala />
      </InsertFormDialog>

      <InsertFormDialog
        openDialog={openConfirmDeleteDialog}
        setCloseDialog={() => setopenConfirmDeleteDialog(false)}
        handleOK={handleDelete}
        title="Sei sicuro di voler eliminare la sala?"
      >
        <DialogConfermaEliminazione />
      </InsertFormDialog>
      <Box height={70}>
      </Box>
    </Box>
  );
}
