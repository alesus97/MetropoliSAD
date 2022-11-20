
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
  Skeleton,
} from "@mui/material";

import {ArrowCircleRight} from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Quiz () {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const skeletonArray = Array(5).fill('');
 
  useEffect(() => {
    axios
      .get("https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film")
      .then((res) => {
        const films = res.data;
        setFilms(films);
        setLoading(false)
      });
  }, []);

  

  return (
    <Box>
      <p></p>
       <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row" width="60%">Film Title</TableCell>
              <TableCell align="center" width="10%">View questions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            

          {films && 
          films.map((film, index) => (
               <TableRow
               key={film.codice_film}
             >
               <TableCell component="th" scope="row" width="60%">  {film.titolo} </TableCell>
              <TableCell align="center" width="10%" >  
              <Link to={`/quiz/filmId=${film.codice_film}`} state={{ filmTitle: film.titolo }}><ArrowCircleRight color="primary" /></Link> 

              </TableCell>
              </TableRow>  
        ))}



        {loading && 
          skeletonArray.map((film, index) => (
               <TableRow
               key={index}
             >
               <TableCell component="th" scope="row" width="60%"> <Skeleton/> </TableCell>
               <TableCell align="center" width="10%"> <ArrowCircleRight color="disabled" /> </TableCell>
              </TableRow>  
        ))}

          </TableBody> 
          </Table>
          </TableContainer>
          <p/>

    </Box>
  );
};

