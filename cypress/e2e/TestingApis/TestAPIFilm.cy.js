import { API, Amplify, Auth } from "aws-amplify";
//import { expect } from "chai";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async () => {
  await Auth.signIn("alesus97@gmail.com", "Gabeweaver96!");
});

describe("FILM", () => {
   it("GET", async function () {
    APIService.getAllFilms()
      .then((res) => {
        expect(res.status === 200 || res.data.length > 0).to.be.true;
       
      })
      .catch((error) => {
        console.log(error);
      });
  }); 

  it("POST - DELETE di un film non esistente", async function () {
    const film = {
      titolo: "Hercules",
      genere: "Fantastico",
      regia: "Martin Scorsese",
      produttore: "Alessio Carusio",
      data_uscita: "1996-04-09",
      durata: "154",
      trama: "Hercules uccide Ade",
      image_url:
        "https://movieplayer.net-cdn.it/t/images/2014/06/09/hercules_5_jpg_320x0_crop_q85.jpg",
    };
    APIService.createFilm(film)
      .then((res) => {
        expect(res.status === 200 && res.data.titolo == "Hercules" && res.data.genere == "Fantastico" 
        && res.data.regia == "Martin Scorsese" && res.data.produttore == "Alessio Carusio" && res.data.data_uscita == "1996-04-09"
        && res.data.durata == "154" && res.data.trama == "Hercules uccide Ade" 
        && res.data.image_url == "https://movieplayer.net-cdn.it/t/images/2014/06/09/hercules_5_jpg_320x0_crop_q85.jpg").to.be.true;
        
        onDeleteIndex = res.data.codice_film;
        console.log(onDeleteIndex);
        APIService.deleteFilm(onDeleteIndex)
          .then((res) => {
            expect(res.status === 200 || res.data.message === "Il film è stato correttamente eliminato.").to.be.true;
            
          })
          .catch((error) => {
            console.log(error);
          });
        
      })
      .catch((error) => {
        console.log(error);
      });
  });
   it("POST  di un film già esistente", async function () {
    const film = {
      titolo: "Ricomincio da tre",
      genere: "Commedia",
      regia: " Massimo Troisi",
      produttore: "Fulvio Lucisano, Mauro Berardi",
      data_uscita: "1981-05-03",
      durata: "106",
      trama:
        "In cerca di nuovi stimoli un giovane napoletano si trasferisce a Firenze, dove si innamora di una donna che non sa chi sia il padre di suo figlio ",
      image_url: "https://pad.mymovies.it/filmclub/2006/10/216/locandina.jpg",
    };
    APIService.createFilm(film)
      .then((res) => {
        expect(res.status === 200).to.be.true;
        
      })
      .catch((error) => {
        expect(error.message === "Request failed with status code 500").to.be
          .true;
        console.log(error.message);
      });
  }); 
});
