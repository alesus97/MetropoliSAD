
import React from "react";

import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { TextField } from "@mui/material";


export default function DialogQuestion(){
    return(

    <Container sx={{  paddingY: 3, marginTop: 5 }}>
      <Typography variant="h3" align="center" component="h2">
        Add Question
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent align="center" sx={{ paddingY: 3, paddingX: 5 }}>

          <Grid container spacing={2}>
                  <Grid item md={2}>
                    <Typography variant="h5" sx={{mt:1.25}}> Question</Typography>
                  </Grid>
                  <Grid item md={10}>
                  <TextField
                    fullWidth
                    autoComplete="question"
                    name="question"
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
                    autoComplete="answer1"
                    name="answer1"
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                  />
                  </Grid>
                  <Grid item md={5}>
                  <TextField
                    fullWidth
                    autoComplete="answer2"
                    name="answer2"
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
              autoComplete="answer3"
              name="answer3"
              sx={{"& fieldset": {
                borderColor: "white",
              },}}
            />
            </Grid>
            <Grid item md={5}>
            <TextField
              fullWidth
              autoComplete="correctAnswer"
              name="correctAnswer"
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