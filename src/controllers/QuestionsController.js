import QuestionsView from "../pages/QuestionsView";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Domanda from "../models/Domanda";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
export default function QuestionsController(){
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState()

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [onDeleteIndex,setOnDeleteIndex] = useState();
    const [filmTitle, setFilmTitle] = useState("");

    const { filmId } = useParams();

    const createQuestion = async (event) => {
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
          const response = await APIService.createQuestion(filmId, postData);
      
          const newQuestion = {
            codice_domanda: response.data.codice_domanda,
            ...postData,
          };
    
          const newQuestions = [...questions];
          newQuestions.push(newQuestion);
          setQuestions(newQuestions);
  
      } catch(error) {
        throw error
      } 
    
    }
  
  
    const deleteQuestion = async (event) => {
      event.preventDefault();
      const codiceDomanda = questions[onDeleteIndex].codice_domanda;
      
      try {
  
        const response = await APIService.deleteQuestion(codiceDomanda)
    
          const dataDelete = [...questions];
          dataDelete.splice(onDeleteIndex, 1);
          setQuestions([...dataDelete]);
          console.log("Domanda cancellata correttamente");
  
      } catch(error) {
        throw error
      } 
      
     };
  
    
      const getAllQuestions = async (event) => { 
      APIService.getAllQuestions(filmId).then((res) => {
        setFilmTitle(res.data.titolo)
        const newQuestions = res.data.domande.map((question) => new Domanda(question));
        setQuestions(newQuestions);
        setLoading(false);
      }).catch((err) => {
        console.log(err)
          setError(true)
          setErrorMessage(err)
      });
    }
    useEffect(() => {
      getAllQuestions()

    }, []);


    return(
      error ?  
      <ErrorPage error={errorMessage}/> :
      <QuestionsView handleSubmit={createQuestion} handleDelete={deleteQuestion} loading={loading} questions={questions} setOnDeleteIndex={setOnDeleteIndex} filmTitle={filmTitle}/>

    );

}