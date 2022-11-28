import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import IdentifyAccount from "../pages/Auth/IdentifyAccount";
import Amplify from "aws-amplify";
import { useState } from "react";
import awsconfig from "../constants/aws-exports";

export default function IdentifyAccountController() {
Amplify.configure(awsconfig);
  const navigate = useNavigate();



  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isOkClicked, setOkClicked] = useState(false);

  const IdentifyAccountSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: IdentifyAccountSchema,
    onSubmit: () => {
      console.log("submitting...");

      Auth.forgotPassword(values.email)
        .then((data) => {
          setErrorMessage("");
          setOkClicked(true);
          setIserror(false);

          console.log(data);

          navigate("/resetPassword", { state: { email: values.email } });
        })
        .catch((err) => {
          setOkClicked(true);
          setIserror(true);
          console.log(err);
          setErrorMessage(err.message);
        });
    },
  });

  const { errors, touched, values, isSubmitting, getFieldProps, handleSubmit } =
    formik;
  return (
    <IdentifyAccount
      formik={formik}
      errors={errors}
      touched={touched}
      getFieldProps={getFieldProps}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      iserror={iserror}
      setIserror={setIserror}
      isOkClicked={isOkClicked}
    />
  );
}
