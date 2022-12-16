import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLogged, setIsLogged ] = useState(null);

    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
          case 'signIn':
              setIsLogged(true)
              break;
          case 'signOut':
            console.log('user signed out');
             setIsLogged(null)
              break;
        }
      });

    useEffect(() => {
        Auth.currentAuthenticatedUser()
        .then((res) => {
            console.log(res)

            const newUser = {
                attributes: res.attributes,
                role: res.signInUserSession.accessToken.payload["cognito:groups"][0]
            }

            setUser(newUser)
          
        }).catch((error) => {
            console.log(error)
            setUser(null)
            setError(error)
        })
    }, [isLogged])

    return {user, error}

}