
import InsertFormDialog from "../components/InsertFormDialog";

import DialogQuestion from "../components/Dialogs/DialogQuestion";

import { useParams } from "react-router-dom";

import {Delete, Add} from "@mui/icons-material";
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

} from "@mui/material";



export default function Questions() {
    const { filmId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [iserror, setIserror] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      
      const postData = {
        testo: data.get("question"),
        risposta_errata_1: data.get("answer1"),
        risposta_errata_2: data.get("answer2"),
        risposta_errata_3: data.get("answer3"),
        risposta_corretta:  data.get("correctAnswer")
      };

      try {
        const response = await axios.post(
          `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/${filmId}/domanda`,
          postData
        );

        const newQuestion = {
          codice_domanda: response.data.codice_domanda,
          ...postData, //Funziona al 90%
        };
  
        const newQuestions = [...questions];
        newQuestions.push(newQuestion);
        setQuestions(newQuestions);

    } catch(error) {
      throw error
    } 
  
  }



  const handleDelete = (index) => {
    const codiceDomanda = questions[index].codice_domanda;
    axios
      .delete(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/domanda/${codiceDomanda}`
      )
      .then((res) => {
        const dataDelete = [...questions];
        dataDelete.splice(index, 1);
        setQuestions([...dataDelete]);
        console.log("Domanda cancellata correttamente");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages(["Update failed! Server error"]);
        setIserror(true);
      });
  };

  useEffect(() => {
    axios
      .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/${filmId}/domande`)
      .then((res) => {
        const questions = res.data;
        setQuestions(questions);
         console.log(questions); 
      });
  }, []);

  return (
    <Box>

      <Fab sx={{position: 'fixed' , bottom:"3%", right:"3%"}}color="primary" aria-label="add" onClick={() => setOpenDialog(true)}>
        <Add />
      </Fab>

      <InsertFormDialog
        openDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        handleSubmit={handleSubmit}
        title="Inserisci nuova domanda"
      ><DialogQuestion/></InsertFormDialog>


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
              >
                <TableCell component="th" scope="row"> {question.testo} </TableCell>
                <TableCell align="center"> {question.risposta_errata_1} </TableCell>
                <TableCell align="center"> {question.risposta_errata_2} </TableCell>
                <TableCell align="center"> {question.risposta_errata_3} </TableCell>
                <TableCell align="center"> {question.risposta_corretta} </TableCell>
                <TableCell align="center" >  <IconButton onClick={() => handleDelete(index)}> <Delete color="primary" /> </IconButton> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p />
    </Box>
  );
}
