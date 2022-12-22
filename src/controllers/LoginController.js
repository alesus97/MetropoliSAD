import { Amplify, Auth} from "aws-amplify";
import awsconfig from "../aws-exports";
import { useNavigate } from "react-router-dom";
import LoginView from "../pages/Auth/LoginView";
import AuthLayout from "../components/AuthLayout";
export default function LoginController(){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();

    const title = "Effettua il login";
    const buttonLabel = "Login";

    const signIn = async (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        try {
            const user = await Auth.signIn(email, password)   
            navigate("/", { replace: true });

        }catch(err){
            throw err
        }
    };

    return(
        <AuthLayout handleSubmit={signIn} title={title} buttonLabel={buttonLabel}>
            <LoginView/>
        </AuthLayout>

    );
}