export default class Spettacolo{
    codice_spettacolo
    data
    prezzo
    sala
    film

    constructor(data) {
        this.codice_spettacolo = data.codice_spettacolo;
        this.data = data.data;
        this.prezzo = data.prezzo;
        this.sala = data.sala;
        this.film = data.film;
    }


}