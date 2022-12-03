
export default class Cinema{
    via
    latitudine
    longitudine
    cap
    civico
    nome
    citta
    recapito
    codice_cinema
    image_url
    

    constructor(data) {
        this.via = data.via;
        this.latitudine = data.latitudine;
        this.longitudine = data.longitudine;
        this.cap = data.cap;
        this.civico = data.civico;
        this.nome = data.nome;
        this.citta = data.citta;
        this.recapito = data.recapito;
        this.codice_cinema = data.codice_cinema;
        this.image_url = data.image_url;
      }

}