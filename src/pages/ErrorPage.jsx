import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import {ListItem} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage(props) {
    const navigate = useNavigate();
    console.log(props.error)
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
              {props.error.response?.status}
            </Typography>
            <Typography variant="h5">
             {props.error?.code}
            </Typography>
            <Typography variant="h6">
             {props.error.response?.data.message}
            </Typography>
            <p></p>
            {/* <Button variant="contained" onClick={() => navigate('/schedule')}>Back Home</Button> */}
          </Grid> 
          </ListItem>
          <ListItem> 
         <Grid >
            <img
              src="/ErrorImage.png"
              alt=""
              width={500} height={500}
            />
            </Grid>
            </ListItem>
          
      </Stack>
    </Box>

    );
}