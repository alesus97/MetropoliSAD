
import { Amplify, Auth } from "aws-amplify";
import * as Yup from "yup";

import { AUTH_USER_TOKEN_KEY } from "../constants/const";
import awsconfig from "../constants/aws-exports"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginView from "../pages/Auth/LoginView";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";


export default function LoginController(){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();
    const [iserror, setIserror] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch()



    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email")
      const password = data.get("password")
  
      setIsSubmitting(true);
  
      Auth.signIn(email, password)
        .then((user) => {
          console.log(user)
          setIserror(false);
          setErrorMessage("");


           dispatch(login({
              userInfo: user.attributes,
              role: "ADMIN"
          })) 

          localStorage.setItem( AUTH_USER_TOKEN_KEY, user.signInUserSession.accessToken.jwtToken );
          /* localStorage.setItem('roles', "ADMIN"); */


          navigate("/", { replace: true });
        })
        .catch((err) => {
          setIsSubmitting(false);
          setErrorMessage(err.message);
          setIserror(true);
        });
  
    };

    return(
        <LoginView handleSubmit={handleSubmit} isSubmitting={isSubmitting} errorMessage={errorMessage} iserror={iserror} setIserror={setIserror}   />
    );
}