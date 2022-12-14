import {API} from "aws-amplify";
const apiName = "cinema-sad";

export const APIService = {
  /* *
        ! Palinsesto
        * OK funziona
    */

  getAllSpettacoli: function (codiceCinema) {
    return API.get(apiName,`/cinema/${codiceCinema}/spettacoli`, {response: true})
  },

  deleteSpettacolo: function (codiceSpettacolo) {
    return API.del(apiName,`/spettacoli/${codiceSpettacolo}`, {response: true} )
  },

  createSpettacolo: function (idSala, spettacolo) {
    const myInit = {
      body: spettacolo,
      response: true
    }
    return API.post(apiName,`/sale/${idSala}/spettacoli`, myInit)
  },

  /* *
        ! Sala
        * OK funziona
    */

  getAllSale: function (codiceCinema) {
    return API.get(apiName, `/cinema/${codiceCinema}/sale`, {response: true})
  },

  deleteSala: function (idSala) {
    return API.del(apiName, `/sale/${idSala}`, {response: true})
  },

  createSala: function (codiceCinema, sala) {
    const myInit = {
      body: sala,
      response: true
    }
    return API.post(apiName, `/cinema/${codiceCinema}/sale`, myInit )
  },

  /**
   *  ! Film
   *  * OK funziona
   */

  getAllFilms: function () {
    return API.get(apiName, `/film`, {response: true})
  },

  deleteFilm: function (codiceFilm) {
    return API.del(apiName, `/film/${codiceFilm}`, {response: true})
  },

  createFilm: function (film) {
    const myInit = {
      body: film,
      response: true
    }

    return API.post(apiName, `/film`, myInit )
  },

  /**
   *  ! Questions
   *  *OK funziona
   */

  getAllQuestions: function (filmId) {
    return API.get(apiName, `/film/${filmId}/domande`, {response: true} )
  },

  deleteQuestion: function (codiceDomanda) {
    return API.del(apiName, `/domande/${codiceDomanda}`, {response: true} )
  },

  createQuestion: function (filmId, question) {

    const myInit = {
      body: question,
      response: true
    }

    return API.post(apiName, `/film/${filmId}/domande`, myInit)
  },

  /**
   *  ! Store
   *  ? Non implementato
   */

  getAllPrizes: function () {
    return API.get(apiName, `/premi`, {response: true})
  },

  deletePrize: function (codicePremio) {
    return API.del(apiName, `/premi/${codicePremio}`, {response: true})
  },

  createPrize: function (prize) {
    const myInit = {
      body: prize,
      response: true
    }

    return API.post(apiName, `/premi`, myInit )
  },

  /**
   *  ! Cinema
   */

  getAllCinemas: function () {
    return API.get(apiName, `/cinema`, {response: true} )
  },

  deleteCinema: function (codiceCinema) {
    return API.del(apiName, `/cinema/${codiceCinema}`, {response: true})
  },

  createCinema: function (cinema) {
    const myInit = {
      body: cinema,
      response: true
    }
    return API.post(apiName, `/cinema`, myInit )
  },

  /**
   *  ! Prenotazione (questa sta qua solo per il testing)
   */

    getPostiDisponibili: function (codiceSpettacolo) {
    return API.get(apiName, `/spettacoli/${codiceSpettacolo}/disponibilita`, {response: true} )
  },

  getBiglietti: function () {
    return API.get(apiName, `/biglietti`, {response: true} )
  },

  createBiglietto: function (posti, codiceSpettacolo) {
    const myInit = {
      body: posti,
      response: true
    }

    return API.post(apiName, `/spettacoli/${codiceSpettacolo}/biglietti`, myInit )
  }, 

};
