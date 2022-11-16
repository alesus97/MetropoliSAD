import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CreateQuiz() {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate()


    const { state } = useLocation();
    const { codiceFilm } = state;

      const handleClick = () => {
            console.log(codiceFilm)
      }



  return (
    <Container sx={{  paddingY: 3, marginTop: 5 }}>
      <Typography variant="h3" align="center" component="h2">
        Add Question
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent align="center" sx={{ paddingY: 3, paddingX: 5 }}>

          <Grid container spacing={2}>
                  <Grid item md={2}>
                    <Typography variant="h5" sx={{mt:1.25}}> Question 1</Typography>
                  </Grid>
                  <Grid item md={10}>
                  <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    name="email"
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                  />
                  </Grid>
                </Grid>
          

                <Grid container spacing={2} sx={{mt:2}}>
                <Grid item md={2}></Grid>
                  <Grid item md={5}>
                  <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    name="email"
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                  />
                  </Grid>
                  <Grid item md={5}>
                  <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    name="email"
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                  />
                  </Grid>

                </Grid>

        
          <Grid container spacing={2} sx={{mt:2}}>
          <Grid item md={2}></Grid>
            <Grid item md={5}>
            <TextField
              fullWidth
              autoComplete="email"
              type="email"
              name="email"
              sx={{"& fieldset": {
                borderColor: "white",
              },}}
            />
            </Grid>
            <Grid item md={5}>
            <TextField
              fullWidth
              autoComplete="email"
              type="email"
              name="email"
              sx={{"& fieldset": {
                borderColor: "white",
              },}}
            />
            </Grid>
          </Grid>


          



            

        </CardContent>
      </Card>
    </Container>
  );
}
