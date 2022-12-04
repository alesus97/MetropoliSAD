
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import IdentifyAccountView from "../pages/Auth/IdentifyAccountView";
import Amplify from "aws-amplify";
import { useState } from "react";
import awsconfig from "../constants/aws-exports";

export default function IdentifyAccountController() {
  
  const navigate = useNavigate();
  Amplify.configure(awsconfig);

  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isOkClicked, setOkClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("identifyAccount")

    console.log("submitting...");

      Auth.forgotPassword(email)
        .then((data) => {
          setErrorMessage("");
          setOkClicked(true);
          setIserror(false);

          console.log(data);

          navigate("/resetPassword", { state: { email: email } });
        })
        .catch((err) => {
          setOkClicked(true);
          setIserror(true);
          console.log(err);
          setIsSubmitting(false);
          setErrorMessage(err.message);
        });

  };

  return (
    <IdentifyAccountView
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      iserror={iserror}
      setIserror={setIserror}
      isOkClicked={isOkClicked}
    />
  );
}
