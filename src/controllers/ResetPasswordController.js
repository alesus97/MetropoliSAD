import ResetPassword from "../pages/Auth/ResetPassword";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import YupPassword from "yup-password";
import * as Yup from "yup";
import Amplify from "aws-amplify";
import awsconfig from "../constants/aws-exports";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";


export default function ResetPasswordController(props){
    YupPassword(Yup);
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { state } = useLocation();
  const { email } = state;



  const ResetPasswordSchema = Yup.object().shape({
    verificationCode: Yup.string().required("Verification code is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - shoud be 8 chars minimum.")
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: () => {
      Auth.forgotPasswordSubmit(email, values.verificationCode, values.password)
        .then((data) => {
          setIserror(false);
          setErrorMessage("");
          navigate("/login");
        })
        .catch((err) => {
          setIsSubmitting(false);
          setErrorMessage(err.message);
          setIserror(true);
        });
    },
  });

  const { errors, touched, values, getFieldProps, handleSubmit } =
    formik;

    return(
        <ResetPassword formik={formik}
        errors={errors}
        touched={touched}
        getFieldProps={getFieldProps}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        errorMessage={errorMessage}
        iserror={iserror}
        setIserror={setIserror}/>
    );
}