
import React from "react";

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Skeleton,
} from "@mui/material";

import {ArrowCircleRight} from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function QuizView ({films, loading}) {
  
  const skeletonArray = Array(5).fill('');
 
  return (
    <Box sx={{p:3}}>
       <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row" width="60%">Titolo del film</TableCell>
              <TableCell align="center" width="20%">Vedi domande</TableCell>
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
              <Link to={`/quiz/filmId=${film.codice_film}`}><ArrowCircleRight color="primary" /></Link> 

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

    </Box>
  );
};

