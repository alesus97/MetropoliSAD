
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
  Fab,
  Typography

} from "@mui/material";

import Film from "./Film"
import {Delete, ArrowCircleRight} from "@mui/icons-material";
import { Navigate, Route, Routes, useNavigate, Link } from "react-router-dom";


export default function Quiz () {

  const navigate = useNavigate()


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
      <Typography align="center" >Lista film che hanno delle domande associate</Typography>
      <p></p>
       <TableContainer component={Paper} sx={{maxHeight: "800px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Film Title</TableCell>
              <TableCell align="center">Delete questions</TableCell>
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
                <IconButton>
                    <Delete color="primary" />
                </IconButton> 
              </TableCell>
              <TableCell align="center" >   
                <IconButton component={Link} to={`/quiz/${film.codice_film}`}>
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

