import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

before(async () => {
  await Auth.signIn("alesus97@gmail.com", "Gabeweaver96!");
});

describe("PRENOTAZIONE", () => {
   it("GET BIGLIETTI", async function () {
    APIService.getBiglietti()
      .then((res) => {
        expect(res.status === 200).to.be.true;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }); 

  it("GET POSTI DISPONIBILI - CREATE BIGLIETTI", async function () {
    const posti = {
      codici_posto: [],
    };

    APIService.getPostiDisponibili(234)
      .then((resPosti) => {
        expect(resPosti.status === 200).to.be.true;
        var posto = resPosti.data.find((posto) => posto.libero == true);
        posti.codici_posto.push(posto.codice_posto);
        APIService.createBiglietto(posti, 234)
          .then((res) => {
            expect(
              res.status === 200 ||
                res.data.message === "biglietti registrati correttamente"
            ).to.be.true;
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
