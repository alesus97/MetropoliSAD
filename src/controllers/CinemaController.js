
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import CinemaView from "../pages/DrawerPages/CinemaView";
import Cinema from "../models/Cinema"


export default function CinemaController(){
  const [cinemas, setCinemas] = useState([]);
  const [onDeleteIndex, setOnDeleteIndex] = useState();
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        const postData = {
            nome: data.get("nome"),
            citta: data.get("citta"),
            recapito: data.get("recapito"),
            via: data.get("via"),
            cap:data.get("CAP"),
            latitudine: data.get("latitudine"),
            longitudine: data.get("longitudine"),
            image_url: data.get("image_url"),
            civico: data.get("civico"), 
        };
    
        try {
    
          const response = await APIService.createCinema(postData);
    
          console.log(response);
    
          const newCinema = {
            codice_cinema: response.data.codice_cinema,
            ...postData,
          };
    
          console.log(newCinema);
    
          const newCinemas = [...cinemas];
          newCinemas.push(newCinema);
          setCinemas(newCinemas);
        } catch (error) {
          throw error;
        }
      };
    
      const handleDelete = async (event) => {
        event.preventDefault();
         const id_cinema = cinemas[onDeleteIndex].codice_cinema;
    
        try {
    
    
          const response = await APIService.deleteCinema(id_cinema)
    
          const dataDelete = [...cinemas];
          dataDelete.splice(onDeleteIndex, 1);
          setCinemas([...dataDelete]);
          console.log("Cinema cancellato correttamente");
        } catch (error) {
          throw error;
        } 
      };
    
      useEffect(() => {

        APIService.getAllCinemas().then((res) => {
          const newCinemas = res.data.map((cinema) => new Cinema(cinema));
          setCinemas(newCinemas);
          setLoading(false);
        }).catch((err) => {

        setError(true);
        setErrorMessage(err);
        }); 
        
       
    
    
      }, []); 
    
    return(
      error ?  
      <ErrorPage error={errorMessage}/> :
        <CinemaView handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} cinemas={cinemas} setOnDeleteIndex={setOnDeleteIndex}/>

    );
}