import Quiz from "../pages/DrawerPages/Quiz";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
export default function QuizController() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    APIService.getAllFilms().then((res) => {
        const films = res.data;
        setFilms(films);
        setLoading(false);
      });
      
  }, []);

  return( <Quiz films={films} loading={loading}/>);
}
