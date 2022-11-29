
export default class Sala{
    id_sala
    numero_sala
    codice_cinema
    capienza

    constructor(data) {
        this.id_sala = data.id_sala;
        this.numero_sala = data.numero_sala;
        this.codice_cinema = data.codice_cinema;
        this.capienza = data.capienza;
      }
} 