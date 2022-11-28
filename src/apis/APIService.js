import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com'
 });
 

 export const APIService = {
    /* *
        ! Palinsesto
        * OK funziona
    */
    
    getAllSpettacoli: function(/* codiceCinema */) {
        return axiosInstance.request({
            method: "GET",
            url: `/1/spettacoli`
        });
    },

    deleteSpettacolo: function(codiceSpettacolo) {
        return axiosInstance.request({
            method: "DELETE",
            url: `/spettacolo/${codiceSpettacolo}`
        });
    },

    createSpettacolo: function(spettacolo) {
        return axiosInstance.request({
            method: "POST",
            url: `/spettacolo`,
            data: spettacolo
        });
    },

       /* *
        ! Sala
        * OK funziona
    */

        getAllSale: function(/* codiceCinema */) {
            return axiosInstance.request({
                method: "GET",
                url: `/1/sale`
            });
        },

        deleteSala: function(idSala) {
            return axiosInstance.request({
                method: "DELETE",
                url: `/sala/${idSala}`
            });
        },

        createSala: function(sala) {
            return axiosInstance.request({
                method: "POST",
                url: `/1/sala`,
                data: sala
            });
        },



    /** 
     *  ! Film
     *  * OK funziona
    */

     getAllFilms: function() {
        return axiosInstance.request({
            method: "GET",
            url: `/film`
        });
    },

    deleteFilm: function(codiceFilm) {
        return axiosInstance.request({
            method: "DELETE",
            url: `/film/${codiceFilm}`
        });
    },

    createFilm: function(film) {
        return axiosInstance.request({
            method: "POST",
            url: `/film`,
            data: film
        });
    },


    /** 
     *  ! Questions
     *  *OK funziona
    */

     getAllQuestions: function(filmId) {
        return axiosInstance.request({
            method: "GET",
            url: `/${filmId}/domande`
        });
    },

    deleteQuestion: function(codiceDomanda) {
        return axiosInstance.request({
            method: "DELETE",
            url: `domanda/${codiceDomanda}`
        });
    },

    createQuestion: function(filmId, question) {
        return axiosInstance.request({
            method: "POST",
            url: `${filmId}/domanda`,
            data: question
        });
    },

     /** 
     *  ! Store
     *  ? Non implementato
    */


      getAllPrizes: function() {
        return axiosInstance.request({
            method: "GET",
            url: `/quiVaIlLinkDellaGet`
        });
    },

    deletePrize: function(codicePremio) {
        return axiosInstance.request({
            method: "DELETE",
            url: `/quiVaIlLinkDellaDelete`
        });
    },

    createPrize: function(prize) {
        return axiosInstance.request({
            method: "POST",
            url: `quiVaIlLinkDellaPost`,
            data: prize
        });
    },


     /** 
     *  ! Login
    */


}