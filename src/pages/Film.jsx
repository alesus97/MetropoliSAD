import React, { useState, useEffect } from "react";
import FilmCard from "../components/Card";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

import FormDialog from "../components/Dialog";

export default function Analytics() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [infoS, setInfoS] = useState([]);

  useEffect(() => {
    axios
      .get("https://6368e35028cd16bba70f1e8a.mockapi.io/film")
      .then((res) => {
        const infoS = res.data;
        setInfoS(infoS);
        console.log(infoS);
      });
  }, []);
  const handleDeleteFilm = (index) => {
    const dataDelete = [...infoS];
    dataDelete.splice(index, 1);
    setInfoS([...dataDelete]);
    //console.log("sto grandissimo cazzo!");
  };

  return (
      <Container maxWidth={false} sx={{ml:"20%", mt:"5%", maxWidth:"80%"}}>
      <FormDialog />
        <Grid container spacing={3}>
          {infoS.map((info, index) => (
            <Grid item key={info.codice_film} xs={12} md={6} lg={4}>
              <FilmCard
                info={info}
                onDeleteAction={() => handleDeleteFilm(index)}
              ></FilmCard>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}
