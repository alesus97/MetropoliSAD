import {Amplify, Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import awsmobile from "../aws-exports";
import { useNavigate } from "react-router-dom";


 
export default function useUser() {
    const navigate = useNavigate();
    Amplify.configure(awsmobile);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLogged, setIsLogged ] = useState(null); 
    
     Hub.listen('auth', (data) => {
        switch (data.payload.event) {
          case 'signIn':
                setIsLogged(true)
                break;
          case 'signOut':
                setIsLogged(false)
          break;
        
        }
      });
 
     useEffect(() => { 
        Auth.currentAuthenticatedUser()
        .then((res) => {  
            const newUser = {
                attributes: res.attributes,
                role: res.signInUserSession.accessToken.payload["cognito:groups"][0]
            }

            setUser(newUser)
          
        }).catch((error) => {      
            setUser(null)
            setError(error)

        })
     }, [isLogged]) 

    return {user, error}

}