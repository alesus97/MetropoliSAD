import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async ()=>{
    await Auth.signIn('alesus97@gmail.com','Gabeweaver96!')
})

    describe('CINEMA', ()=>{
    
    it('GET', async function() { 
            APIService.getAllCinemas().then((res)=>{
                //console.log(res)
                expect(res.status===200).to.be.true

            }).catch((error)=>{
                console.log(error)
            })     
        })
    
    
      it('POST - DELETE', async function() { 
        const cinema ={
            nome: "MetropoliSAD - Bologna",
            citta: "Bologna",
            recapito: "051 4578994",
            via: "Piazza Minghetti",
            cap: "40010",
            latitudine: "44°29′38.00″ Nord",
            longitudine: "11°20′34.00″ Est",
            image_url: "https://www.cna.it/wp-content/uploads/2020/11/shutterstock_169841813-1024x682.jpg",
            civico: "6", 
        }
        APIService.createCinema(cinema ).then((res)=>{
            //console.log(res) 
            expect(res.status===200 || res.data.message === "Film inserito correttamente").to.be.true
            //console.log(res)
             onDeleteIndex = res.data.codice_cinema
           // console.log(onDeleteIndex)   
             APIService.deleteCinema(onDeleteIndex).then((res)=>{
               expect(res.status===200 || res.data.message === "La domanda è stata correttamente eliminata.").to.be.true
                     console.log(res)
                    
            }).catch((error)=>{
                console.log(error)
            })  
        //console.log(onDeleteIndex)
        }).catch((error)=>{
            console.log(error)
        })
                
    })


        
    }) 





