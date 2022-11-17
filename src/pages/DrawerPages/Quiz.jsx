
import React, { useState, useEffect } from "react";
import axios from "axios"
import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";

import {ArrowCircleRight} from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Quiz () {


 
  useEffect(() => {
    axios
      .get("https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film")
      .then((res) => {
        const films = res.data;
        setFilms(films);
        console.log(films);
      });
  }, []);

  const [films, setFilms] = useState([]);

  return (
    <Box>

  

      <p></p>
       <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Film Title</TableCell>
              <TableCell align="center">View questions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

          {films.map((film, index) => (
               <TableRow
               key={film.codice_film}
             /*   sx={{ "&:last-child td, &:last-child th": { border: 0 } }} */
             >
               <TableCell component="th" scope="row">  {film.titolo} </TableCell>
              <TableCell align="center" >   
                <IconButton component={Link} to={`/quiz/filmId=${film.codice_film}`}>
                    <ArrowCircleRight color="primary" />
                </IconButton> 
              </TableCell>
              </TableRow>  
        ))}

          </TableBody> 
          </Table>
          </TableContainer>
          <p/>

    </Box>
  );
};

