import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import {ListItem} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound404View() {
    const navigate = useNavigate();
    console.log("404NOTFOUND")
    return(
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >

      <Stack direction="row" spacing={2}>
   
        <ListItem> 
          <Grid >
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              Pagina non trovata
            </Typography>
            <p></p>
            <Button variant="contained" onClick={() => navigate('/')}>Torna alla home</Button>
          </Grid> 
          </ListItem>
          <ListItem> 
         <Grid >
            <img
              src="/404.png"
              alt=""
              width={500} height={500}
            />
            </Grid>
            </ListItem>
          
      </Stack>
    </Box>

    );
}