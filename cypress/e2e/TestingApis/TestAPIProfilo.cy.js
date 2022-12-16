import { API, Amplify, Auth } from "aws-amplify";
import { APIService } from "../../../src/apis/APIService";

import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
const apiName = "cinema-sad";

var onDeleteIndex = null;

before(async ()=>{
    await Auth.signIn('alesus97@gmail.com','Gabeweaver96!')
})

    describe('PROFILO', ()=>{
    
    it('GET', async function() { 
            APIService.getProfilo().then((res)=>{
                expect(res.status===200).to.be.true
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })     
        })
    
    
    
})

        
   




