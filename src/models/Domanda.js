export default class Domanda{
    codice_domanda
    testo
    risposta_errata_1
    risposta_errata_2
    risposta_errata_3
    risposta_corretta
    codice_film

    constructor(data) {
        this.codice_domanda = data.codice_domanda;
        this.testo = data.testo;
        this.risposta_errata_1 = data.risposta_errata_1;
        this.risposta_errata_2 = data.risposta_errata_2;
        this.risposta_errata_3 = data.risposta_errata_3;
        this.risposta_corretta = data.risposta_corretta;
        this.codice_film = data.codice_film;
    }
}