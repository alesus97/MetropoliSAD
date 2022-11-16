
import { useParams } from "react-router-dom";

import {Delete} from "@mui/icons-material";
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

import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export default function Questions() {
    const navigate = useNavigate()
    const { filmId } = useParams();
    const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6374f56408104a9c5f8e7cb8.mockapi.io/${filmId}/questions`)
      .then((res) => {
        const questions = res.data;
        setQuestions(questions);
      /*   console.log(films); */
      });
  }, []);



  return (
    <Box>

        <Fab
        sx={{ position: "fixed", bottom: "3%", right: "3%" }}
        color="primary"
        aria-label="add"
        onClick={() => navigate('/createQuiz',  { state: { codiceFilm: {filmId} } })}
      >
        <AddIcon />
      </Fab>

      <TableContainer component={Paper} sx={{ maxHeight: "800px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell align="center">Answer 1</TableCell>
              <TableCell align="center">Answer 2</TableCell>
              <TableCell align="center">Answer 3</TableCell>
              <TableCell align="center">Correct Answer</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {questions.map((question, index) => (
              <TableRow
                key={index}
                /*   sx={{ "&:last-child td, &:last-child th": { border: 0 } }} */
              >
                <TableCell component="th" scope="row"> {question.Question} </TableCell>
                <TableCell component="th" scope="row"> {question.Answer1} </TableCell>
                <TableCell component="th" scope="row"> {question.Answer2} </TableCell>
                <TableCell component="th" scope="row"> {question.Answer3} </TableCell>
                <TableCell component="th" scope="row"> {question.CorrectAnswer} </TableCell>
                <TableCell align="center" >   <IconButton> <Delete color="primary" /> </IconButton> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p />
    </Box>
  );
}
