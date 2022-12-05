import ResetPasswordView from "../pages/Auth/ResetPasswordView";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import YupPassword from "yup-password";
import * as Yup from "yup";
import Amplify from "aws-amplify";
import awsconfig from "../constants/aws-exports";
import { useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import AuthLayout from "../components/AuthLayout";

export default function ResetPasswordController() {
  YupPassword(Yup);
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { state } = useLocation();
  const { email } = state;

  const resetPasswordSchema = Yup.object().shape({
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const verificationCode = data.get("verificationCode");
    const newPassword = data.get("newPassword");

    try{
      const parsedUser = await resetPasswordSchema
      .validate(
        {
          verificationCode: data.get("verificationCode"),
          password: data.get("newPassword"),
          confirmPassword: data.get("confirmNewPassword"),
        },
        { strict: true }
      )

      const resetPassword = await Auth.forgotPasswordSubmit(email, verificationCode, newPassword)
      console.log(resetPassword)
      navigate("/login");

    }catch(err){
      throw err;
    }
    
  };

  return (
    <AuthLayout handleSubmit={handleSubmit}> 
      <ResetPasswordView/>
    </AuthLayout>
  );
}
