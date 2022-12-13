import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async ()=>{
    await Auth.signIn('alesus97@gmail.com','Gabeweaver96!')
})

    describe('DOMANDE', ()=>{
    
    it('GET', async function() { 
            APIService.getAllQuestions(404).then((res)=>{
                expect(res.status===200 || res.data.domande.length > 0).to.be.true

            }).catch((error)=>{
                console.log(error)
            })     
        })
    
    
    it('POST - DELETE', async function() { 
        const question ={
            testo: "Quanti minuti dura il film?",
            risposta_errata_1: "156",
            risposta_errata_2: "180",
            risposta_errata_3: "170",
            risposta_corretta: "142"
        }
        APIService.createQuestion(402, question ).then((res)=>{
            expect(res.status===200 || res.data.message === "Domanda inserita correttamente").to.be.true
            //console.log(res)
            onDeleteIndex = res.data.codice_domanda
            console.log(onDeleteIndex)   
            APIService.deleteQuestion(onDeleteIndex).then((res)=>{
                expect(res.status===200 || res.data.message === "La domanda è stata correttamente eliminata.").to.be.true
                    // console.log(res)
                    
            }).catch((error)=>{
                console.log(error)
            })
        //console.log(onDeleteIndex)
        }).catch((error)=>{
            console.log(error)
        })
                
    })


        
    })





