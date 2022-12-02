import { useFormik } from "formik";
import { Amplify, Auth } from "aws-amplify";
import * as Yup from "yup";

import { AUTH_USER_TOKEN_KEY } from "../constants/const";
import awsconfig from "../constants/aws-exports"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LoginView from "../pages/Auth/LoginView";


export default function LoginController(props){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();
    const [iserror, setIserror] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
   
  
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email("Provide a valid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    });
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        remember: true,
      },
      validationSchema: LoginSchema,
      onSubmit: () => {
        setIsSubmitting(true);
  
        Auth.signIn(values.email, values.password)
          .then((user) => {
            console.log(user)
            setIserror(false);
            setErrorMessage("");
  
            localStorage.setItem( AUTH_USER_TOKEN_KEY, user.signInUserSession.accessToken.jwtToken );
            localStorage.setItem('roles', "ADMIN");
  
  
            navigate("/schedule", { replace: true });
          })
          .catch((err) => {
            setIsSubmitting(false);
            setErrorMessage(err.message);
            setIserror(true);
          });
      },
    });
  
    const { errors, touched, values, getFieldProps, handleSubmit } = formik;


    return(
        <LoginView formik={formik} errors={errors} touched={touched} values={values} getFieldProps={getFieldProps} handleSubmit={handleSubmit} isSubmitting={isSubmitting} errorMessage={errorMessage} iserror={iserror} setIserror={setIserror}   />
    );
}