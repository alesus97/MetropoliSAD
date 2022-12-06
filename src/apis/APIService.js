import axios from "axios";
import { sign } from "aws4";

/* axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response?.status === 401) {
      localStorage.removeItem("ReactAmplify.TokenKey");
      localStorage.removeItem("roles");
      window.location.reload(true);
    } else return Promise.reject(error);
  }
);
 */


function signRequest(request) {
  const { method, url, data } = request;

  const baseRequest = {
    host: "0ptix34dk9.execute-api.eu-central-1.amazonaws.com",
    method: method,
    url: "https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com" + url,
    path: url,
    data: data
  };

  const identityPoolCredentials = JSON.parse(
    localStorage.getItem("IdentityPoolCredentials")
  );
  
  const signedRequest = sign(baseRequest, {
    accessKeyId: identityPoolCredentials.AccessKeyId,
    secretAccessKey: identityPoolCredentials.SecretKey,
    sessionToken: identityPoolCredentials.SessionToken,
  });

  delete signedRequest.headers["Host"];
  delete signedRequest.headers["Content-Length"];

  return signedRequest;
}

export const APIService = {
  /* *
        ! Palinsesto
        * OK funziona
    */

  getAllSpettacoli: function (codiceCinema) {
    const request = {
      method: "GET",
      url: `/cinema/${codiceCinema}/spettacoli`,
    };
    return axios(signRequest(request));
  },

  deleteSpettacolo: function (codiceSpettacolo) {
    const request = {
      method: "DELETE",
      url: `/spettacoli/${codiceSpettacolo}`,
    };
    return axios(signRequest(request));
  },

  createSpettacolo: function (idSala, spettacolo) {
    const request = {
      method: "POST",
      url: `/sale/${idSala}/spettacoli`,
      data: spettacolo,
    };
    return axios(signRequest(request));
  },

  /* *
        ! Sala
        * OK funziona
    */

  getAllSale: function ( codiceCinema ) {
    const request = {
      method: "GET",
      url: `/cinema/${codiceCinema}/sale`,
    };
    return axios(signRequest(request));
  },

  deleteSala: function (idSala) {
    const request = {
      method: "DELETE",
      url: `/sale/${idSala}`,
    };
    return axios(signRequest(request));
  },

  createSala: function (codiceCinema, sala) {
    const request = {
      method: "POST",
      url: `/cinema/${codiceCinema}/sale`,
      data: sala,
    };
    return axios(signRequest(request));
  },

  /**
   *  ! Film
   *  * OK funziona
   */

  getAllFilms: function () {

    const request = {
        method: "GET",
        url: `/film`,
      };

    return axios(signRequest(request));
  },

  deleteFilm: function (codiceFilm) {
    
    const request = {
        method: "DELETE",
        url: `/film/${codiceFilm}`
    }
      
    return axios(signRequest(request));
  
  },

  createFilm: function (film) {
    const request = {
      method: "POST",
      url: `/film`,
      data: film,
    };
    return axios(signRequest(request));
  },

  /**
   *  ! Questions
   *  *OK funziona
   */

  getAllQuestions: function (filmId) {
    const request = {
      method: "GET",
      url: `/film/${filmId}/domande`,
    };
    return axios(signRequest(request));
  },

  deleteQuestion: function (codiceDomanda) {
    const request = {
      method: "DELETE",
      url: `/domande/${codiceDomanda}`,
    };
    return axios(signRequest(request));
  },

  createQuestion: function (filmId, question) {
    const request = {
      method: "POST",
      url: `/film/${filmId}/domande`,
      data: question,
    };
    return axios(signRequest(request));
  },

  /**
   *  ! Store
   *  ? Non implementato
   */

  getAllPrizes: function () {
    const request = {
      method: "GET",
      url: `/premi`,
    };
    return axios(signRequest(request));
  },

  deletePrize: function (codicePremio) {
    const request = {
      method: "DELETE",
      url: `/premi/${codicePremio}`,
    };
    return axios(signRequest(request));
  },

  createPrize: function (prize) {
    const request = {
      method: "POST",
      url: `/premi`,
      data: prize,
    };
    return axios(signRequest(request));
  },

  /**
   *  ! Cinema
   */

  getAllCinemas: function () {
    const request = {
      method: "GET",
      url: `/cinema`,
    };
    return axios(signRequest(request));
  },

  deleteCinema: function (codiceCinema) {
    const request = {
      method: "DELETE",
      url: `/cinema/${codiceCinema}`,
    };
    return axios(signRequest(request));
  },

  createCinema: function (cinema) {
    const request = {
      method: "POST",
      url: `/cinema`,
      data: cinema,
    };
    return axios(signRequest(request));
  },
};
