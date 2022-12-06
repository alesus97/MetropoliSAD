import SaleView from "../pages/DrawerPages/SaleView";
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Sala from "../models/Sala";

export default function SaleController(){
  const [sale, setSale] = useState([]);
  const [onDeleteIndex, setOnDeleteIndex] = useState();
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        const postData = {
          numeroSala: data.get("numero_sala"),
          numeroFile: Number(data.get("numero_file")),
          postiPerFila: Number(data.get("postiPerFila")),
        };
    
        try {
    
          const response = await APIService.createSala(10,postData);  /* // CAMBIARE CON CODICE_CINEMA */
    
          console.log(response);
    
          const newSala = {
            id_sala: response.data.id_sala,
            numero_sala: data.get("numero_sala"),
            capienza: Number(data.get("postiPerFila") * data.get("numero_file")),
          };
    
          console.log(newSala);
    
          const newSale = [...sale];
          newSale.push(newSala);
          setSale(newSale);
        } catch (error) {
          throw error;
        }
      };
    
      const handleDelete = async (event) => {
        event.preventDefault();
        const idSala = sale[onDeleteIndex].id_sala;
    
        try {
    
    
          const response = await APIService.deleteSala(idSala)
    
          const dataDelete = [...sale];
          dataDelete.splice(onDeleteIndex, 1);
          setSale([...dataDelete]);
          console.log("Sala cancellata correttamente");
        } catch (error) {
          throw error;
        }
      };
    
      useEffect(() => {
    
        APIService.getAllSale(10).then((res) => { //INSERIRE CODICE CINEMA
          const newSale = res.data.map((sala) => new Sala(sala));
          setSale(newSale);
          setLoading(false);
        }).catch((err) => {
          console.log(err);
        setError(true);
        setErrorMessage(err);
        });
    
    
      }, []); 
    
    return(
      error ?  
      <ErrorPage error={errorMessage}/> :
        <SaleView handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} sale={sale} setOnDeleteIndex={setOnDeleteIndex}/>

    );
}