import { Amplify, Auth} from "aws-amplify";
import awsconfig from "../aws-exports";
import { useNavigate } from "react-router-dom";
import LoginView from "../pages/Auth/LoginView";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import AuthLayout from "../components/AuthLayout";

export default function LoginController(){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const title = "Effettua il login";
    const buttonLabel = "Login";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        try {
            const user = await Auth.signIn(email, password)

            var userInfo = {
                ...user.attributes,
                role: user.signInUserSession.accessToken.payload["cognito:groups"][0]
            }
            const credentials = await Auth.currentCredentials();

            localStorage.setItem("IdentityPoolCredentials", JSON.stringify(credentials))
            localStorage.setItem("userInfo", JSON.stringify(userInfo))

            dispatch(login({
                ...userInfo,
                tokens: {
                    accessKeyId: credentials.accessKeyId,
                    secretAccessKey: credentials.secretAccessKey,
                    sessionToken: credentials.sessionToken,
                }
            }))

            navigate("/", { replace: true });

        }catch(err){
            console.log("ERRORE")
            throw err
        }
    };

    return(
        <AuthLayout handleSubmit={handleSubmit} title={title} buttonLabel={buttonLabel}>
            <LoginView/>
        </AuthLayout>

    );
}