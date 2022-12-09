import { Auth, button } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import IdentifyAccountView from "../pages/Auth/IdentifyAccountView";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthLayout from "../components/AuthLayout";

export default function IdentifyAccountController() {
  Amplify.configure(awsconfig);
  const navigate = useNavigate();
  const title = "Inserisci l'account per il quale vuoi recuperare la password";
  const buttonLabel = "Continua";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("identifyAccount");

    try {
      const forgotPassUser = await Auth.forgotPassword(email);
      navigate("/reimpostaPassword", { state: { email: email } });
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthLayout handleSubmit={handleSubmit} title={title} buttonLabel={buttonLabel}>
      <IdentifyAccountView />
    </AuthLayout>
  );
}
