import FilmView from "../pages/DrawerPages/FilmView";
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Film from "../models/Film";

export default function FilmController(){
    const [onDeleteIndex,setOnDeleteIndex] = useState();
    const [films, setFilms] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState()
   
  
    const [loading, setLoading] = useState(true);



    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const postData = {
          titolo: data.get("titolo"),
          genere: data.get("genere"),
          cast: data.get("cast"),
          regia: data.get("regia"),
          produttore: data.get("produttore"),
          data_uscita: data.get("data"),
          durata: data.get("durata"),
          trama: data.get("trama"),
          image_url: data.get("locandina"),
        };

    
         try {
          const response = await APIService.createFilm(postData);
      
          console.log(response);
    
          const newFilm = {
            codice_film: response.data.codice_film,
            ...postData,
          };
    
          const newFilms = [...films];
          newFilms.push(newFilm);
          setFilms(newFilms);
        } catch(error) {
          throw error
        } 
    
      }
    
      const handleDelete = async (event) => {
        event.preventDefault();
        const codiceFilm = films[onDeleteIndex].codice_film;
        
        try {
          const response = await APIService.deleteFilm(codiceFilm);
          const dataDelete = [...films];
          dataDelete.splice(onDeleteIndex, 1);
          setFilms([...dataDelete]);
          console.log("Film cancellato correttamente");
    
        } catch(error) {
          throw error
        } 
        
      };
    
      useEffect(() => {
    
        APIService.getAllFilms().then((res) => {
          const newFilms = res.data.map((film) => new Film(film));
          setFilms(newFilms);
          setLoading(false);
        }).catch((err) => {
          console.log(err)
          setError(true)
          setErrorMessage(err)
        })
    
    
      }, []);


    return(
      error ?  
      <ErrorPage error={errorMessage}/> :
      <FilmView handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} films={films} setOnDeleteIndex={setOnDeleteIndex} />

    );
}