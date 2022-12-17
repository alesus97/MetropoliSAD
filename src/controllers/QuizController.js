import QuizView from "../pages/DrawerPages/QuizView";
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Film from "../models/Film";

export default function QuizController() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

  
    const getAllFilms = async (event) => { 
    APIService.getAllFilms()
      .then((res) => {
        const newFilms = res.data.map((film) => new Film(film));
        setFilms(newFilms);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err);
      });
    }
    useEffect(() => {
      getAllFilms()
  }, []);

  return error ? (
    <ErrorPage error={errorMessage} />
  ) : (
    <QuizView films={films} loading={loading} />
  );
}
