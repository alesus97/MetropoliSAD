export default class Film{
    codice_film
    data_uscita
    produttore
    regia
    durata
    titolo
    genere
    trama
    image_url

    constructor(data) {
        this.codice_film = data.codice_film;
        this.data_uscita = data.data_uscita;
        this.produttore = data.produttore;
        this.regia = data.regia;
        this.durata = data.durata;
        this.titolo = data.titolo;
        this.genere = data.genere;
        this.trama = data.trama;
        this.image_url = data.image_url;
    }    
}