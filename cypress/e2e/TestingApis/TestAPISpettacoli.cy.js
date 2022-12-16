import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async () => {
  await Auth.signIn("alesus97@gmail.com", "Gabeweaver96!");
});

describe("SPETTACOLI", () => {
  it("GET", async function () {
    APIService.getAllSpettacoli(10)
      .then((res) => {
        console.log(res);
        expect(res.status === 200).to.be.true;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  it("POST - DELETE", async function () {
    const spettacolo = {
      codice_film: "402",
      data_ora: "2021-12-07T17:46",
      prezzo: 12,
    };
    APIService.createSpettacolo(181, spettacolo)
      .then((res) => {
        // console.log(res)
        expect(
          res.status === 200 ||
            res.data.message === "Spettacolo inserito correttamente"
        ).to.be.true;
        // console.log(res)
        onDeleteIndex = res.data.codice_spettacolo;
        // console.log(onDeleteIndex)
        APIService.deleteCinema(onDeleteIndex)
          .then((res) => {
            expect(
              res.status === 200 ||
                res.data.message ===
                  "Il cinema è stato correttamente eliminato."
            ).to.be.true;
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        //console.log(onDeleteIndex)
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
