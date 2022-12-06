import PalinsestoView from "../pages/DrawerPages/PalinsestoView";
import { useState } from "react";
import { APIService } from "../apis/APIService";
import { useEffect } from "react";
import Spettacolo from "../models/Spettacolo";
import ErrorPage from "../pages/ErrorPage";
import Film from "../models/Film";
import Sala from "../models/Sala";

export default function PalinsestoController() {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState();
  const [spettacoli, setSpettacoli] = useState([]);
  const [films, setFilms] = useState([]);
  const [sale, setSale] = useState([]);
  const [onDeleteIndex, setOnDeleteIndex] = useState();
  const [loading, setLoading] = useState(true);

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(onDeleteIndex);
    const codiceSpettacolo = spettacoli[onDeleteIndex].codice_spettacolo;

    try {
      const response = await APIService.deleteSpettacolo(codiceSpettacolo);

      const dataDelete = [...spettacoli];
      dataDelete.splice(onDeleteIndex, 1);
      setSpettacoli([...dataDelete]);
      console.log("Spettacolo cancellato correttamente");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {


    APIService.getAllSpettacoli(10) /* PASSARE CODICE CINEMA */
      .then((res) => {
        const newSpettacoli = res.data.map(
          (spettacolo) => new Spettacolo(spettacolo)
        );
        setSpettacoli(newSpettacoli);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err);
      });



    APIService.getAllFilms()
    .then((res) => {
      const newFilms = res.data.map(
        (film) => new Film(film)
      );
      setFilms(newFilms);
      setLoading(false);
    }) 
    .catch((err) => { 
      console.log(err);
      setError(true);
      setErrorMessage(err);
    });


    APIService.getAllSale()
    .then((res) => {
      const newSale = res.data.map(
        (sala) => new Sala(sala)
      );
      setSale(newSale);
      setLoading(false);

    }) 
    .catch((err) => { 
      console.log(err);
      setError(true);
      setErrorMessage(err);

    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sala = JSON.parse(data.get("sala"));
    const film = JSON.parse(data.get("film"));

    const postData = {
      codice_film: film.codice_film,
      data_ora: data.get("data"),
      prezzo: data.get("prezzo"),
    };

    try {
      const response = await APIService.createSpettacolo(sala.id_sala, postData);

      console.log(response);

      const newSpettacolo = {
        codice_spettacolo: response.data.codice_spettacolo,
        data: data.get("data").replace(/T/, " "),
        prezzo: data.get("prezzo"),
        sala: {
          id_sala: sala.id_sala,
          numero_sala: sala.numero_sala,
        },
        film: {
          codice_film: film.codice_film,
          titolo: film.titolo,
          durata: film.durata,
        },
      };

      const newSpettacoli = [...spettacoli];
      newSpettacoli.push(newSpettacolo);
      setSpettacoli(newSpettacoli);
    } catch (error) {
      throw error;
    }
  };

  return error ? (
    <ErrorPage error={errorMessage} />
  ) : (
    <PalinsestoView
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      loading={loading}
      spettacoli={spettacoli}
      setOnDeleteIndex={setOnDeleteIndex}
      films={films}
      sale={sale}
    />
  );
}
