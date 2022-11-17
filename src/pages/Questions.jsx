
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

import {Skeleton} from "@mui/material";



export default function Questions() {
    const { filmId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [loading, setLoading] = useState(true);

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
         //console.log(questions); 
         setLoading(false);
      });
  }, []);

  const skeletonArray = Array(5).fill('');

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


      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow height={70} >
              <TableCell component="th" scope="row" width="30%">Question</TableCell>
              <TableCell align="center" width="10%">Answer 1</TableCell>
              <TableCell align="center" width="10%">Answer 2</TableCell>
              <TableCell align="center" width="10%">Answer 3</TableCell>
              <TableCell align="center" width="10%">Correct Answer</TableCell>
              <TableCell align="center" width="10%">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

           {loading &&
            skeletonArray.map((item, index) => (
              <TableRow   height={70}
              key={index}>
                <TableCell component="th" scope="row" width="30%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <Skeleton />
                </TableCell>
                <TableCell align="center" width="10%">
                  <IconButton> <Delete color="background"/> </IconButton>
                </TableCell>
              </TableRow>
            ))} 





          {questions &&
            questions.map((question, index) => (
              <TableRow  height={70}
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
