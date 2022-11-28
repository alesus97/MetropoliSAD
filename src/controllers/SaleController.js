import Sale from "../pages/DrawerPages/Sale";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";


export default function SaleController(){
  const [sale, setSale] = useState([]);
  const [onDeleteIndex, setOnDeleteIndex] = useState();
  const [loading, setLoading] = useState(true);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        const postData = {
          numeroSala: data.get("numero_sala"),
          numeroFile: Number(data.get("numero_file")),
          postiPerFila: Number(data.get("postiPerFila")),
        };
    
        try {
    
          const response = await APIService.createSala(postData);
    
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
    
        APIService.getAllSale().then((res) => {
          setSale(res.data);
          setLoading(false);
        });
    
    
      }, []); 
    
    return(
        <Sale handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} sale={sale} setOnDeleteIndex={setOnDeleteIndex}/>

    );
}