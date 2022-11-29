import QuestionsView from "../pages/QuestionsView";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Domanda from "../models/Domanda";
import { useParams } from "react-router-dom";
export default function QuestionsController(){
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [onDeleteIndex,setOnDeleteIndex] = useState();

    const { filmId } = useParams();

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
  
  
    const handleDelete = async (event) => {
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
  
    useEffect(() => {
      APIService.getAllQuestions(filmId).then((res) => {
        const newQuestions = res.data.map((question) => new Domanda(question));
        setQuestions(newQuestions);
        setLoading(false);
      });
  
    }, []);


    return(
        <QuestionsView handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} questions={questions} setOnDeleteIndex={setOnDeleteIndex}/>

    );

}