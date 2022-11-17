import React from "react";

export default function createJsonData(event, formType){
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var postData = {}   //Dati da inviare nella post
    var link = ""       //Link della post
    var viewData = {}   //Dati extra necessari per la visualizzazione/cancellazione

    if (formType === "film") {
        link='/film';
        postData = {
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
          viewData = postData;
    } else if (formType === "sala"){
        link='/1/sala';
       
        postData = {
            numeroSala: data.get("numero_sala"),
            numeroFile: Number(data.get("numero_file")),
            postiPerFila: Number(data.get("postiPerFila")),
          };
          viewData = {
            capienza: Number( data.get("postiPerFila") *  data.get("numero_file") )
          }
        
    }else if (formType === "spettacolo"){
        const sala = JSON.parse(data.get("sala"));
        const film = JSON.parse(data.get("film"));

        link='/spettacolo';
        postData = {
            codice_film: film.codice_film,
            id_sala: sala.id_sala,
            data_ora: data.get("data"),
            prezzo: data.get("prezzo"),
          };
          viewData = {
            numero_sala: sala.numero_sala,
            titolo: film.titolo,
            durata: film.durata,
        }
    }

return {postData,link, viewData};

}


