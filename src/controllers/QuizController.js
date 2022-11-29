import QuizView from "../pages/DrawerPages/QuizView";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Film from "../models/Film";

export default function QuizController() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    APIService.getAllFilms().then((res) => {
      const newFilms = res.data.map((film) => new Film(film));
      setFilms(newFilms);
        setLoading(false);
      });
      
  }, []);

  return( <QuizView films={films} loading={loading}/>);
}
