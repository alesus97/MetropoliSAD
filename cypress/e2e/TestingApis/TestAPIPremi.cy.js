import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async () => {
  await Auth.signIn("alesus97@gmail.com", "Gabeweaver96!");
});

describe("PREMI", () => {
  it("GET", async function () {
    APIService.getAllPrizes()
      .then((res) => {
        //console.log(res)
        expect(res.status === 200).to.be.true;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  it("POST - DELETE", async function () {
    const premio = {
      descrizione: "M&M's",
      costo: "30",
    };
    APIService.createPrize(premio)
      .then((res) => {
        //console.log(res)
        expect(
          res.status === 200 ||
            res.data.message === "Premio inserito correttamente"
        ).to.be.true;
        // console.log(res)
        onDeleteIndex = res.data.codice_premio;
        console.log(onDeleteIndex);
        APIService.deleteCinema(onDeleteIndex)
          .then((res) => {
            expect(
              res.status === 200 ||
                res.data.message ===
                  "Il cinema è stato correttamente eliminato."
            ).to.be.true;
            //   console.log(res)
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
