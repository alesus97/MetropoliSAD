import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async ()=>{
    await Auth.signIn('alesus97@gmail.com','Gabeweaver96!')
})

    describe('FILM', ()=>{
    
    it('GET', async function() { 
            APIService.getAllFilms().then((res)=>{
                expect(res.status===200 || res.data.length > 0).to.be.true
                //console.log(res)
            }).catch((error)=>{
                console.log(error)
            })     
        })
    
    
    it('POST - DELETE', async function() { 
        const film = {
            titolo: 'Hercules',
            genere: 'Fantastico',
            regia:' Martin Scorsese',
            produttore: 'Alessio Carusio',
            data_uscita: "1996-04-09",
            durata: '154',
            trama: 'Hercules uccide Ade',
            image_url: 'https://movieplayer.net-cdn.it/t/images/2014/06/09/hercules_5_jpg_320x0_crop_q85.jpg',
          };
        APIService.createFilm(film).then((res)=>{
             expect(res.status===200).to.be.true
            // console.log(res)
             onDeleteIndex = res.data.codice_film
             console.log(onDeleteIndex) 
              APIService.deleteFilm(onDeleteIndex).then((res)=>{
                  expect(res.status===200).to.be.true
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

        
   




