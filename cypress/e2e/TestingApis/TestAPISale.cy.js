import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async () => {
  await Auth.signIn("alesus97@gmail.com", "Gabeweaver96!");
});

describe("SALE", () => {
  it("GET", async function () {
    APIService.getAllSale()
      .then((res) => {
        expect(res.status === 200).to.be.true;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  it("POST - DELETE", async function () {
    const sala = {
      numeroSala: "10",
      numeroFile: 2,
      postiPerFila: 2,
    };
    const codiceCinema = "10";

    APIService.createSala(codiceCinema, sala)
      .then((res) => {
        expect(res.status === 200).to.be.true;
        console.log(res);
        onDeleteIndex = res.data.id_sala;
        console.log(onDeleteIndex);
        APIService.deleteSala(onDeleteIndex)
          .then((res) => {
            expect(res.status === 200).to.be.true;
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
