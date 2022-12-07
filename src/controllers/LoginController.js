
import { Amplify, Auth} from "aws-amplify";
import  {config as AWSConfig, CognitoIdentityCredentials, CognitoIdentityServiceProvider, CognitoIdentity} from 'aws-sdk'
import { AUTH_USER_TOKEN_KEY } from "../constants/const";
import awsconfig from "../constants/aws-exports"
import { useNavigate } from "react-router-dom";
import LoginView from "../pages/Auth/LoginView";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import AuthLayout from "../components/AuthLayout";
import { Groups } from "@mui/icons-material";
import { Cache } from "aws-amplify";


export default function LoginController(){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();
    AWSConfig.region = "eu-central-1";
  
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

       Auth.currentSession()
      .then((result) =>{
      
        AWSConfig.credentials = new CognitoIdentityCredentials({
          IdentityPoolId: "eu-central-1:fb1ff7b7-f27e-4ee0-8183-889d89999912",
          Logins: {
            "cognito-idp.eu-central-1.amazonaws.com/eu-central-1_PS719oUcl" : result.getIdToken().getJwtToken()
          }
        })  

         AWSConfig.credentials.refresh( (err) => {
          if (err) {
            console.error('Failed To Login To CognitoID:', err)
          } else {

              localStorage.setItem("IdentityPoolCredentials", JSON.stringify(AWSConfig.credentials.data.Credentials))  

              var userInfo = {
                ...user.attributes,
                role: user.signInUserSession.accessToken.payload["cognito:groups"][0]
              }

              localStorage.setItem("userInfo", JSON.stringify(userInfo))
        
              dispatch(login({
                ...userInfo,
                tokens: {
                  accessKeyId: AWSConfig.credentials.data.Credentials.AccessKeyId,
                  secretAccessKey: AWSConfig.credentials.data.Credentials.SecretKey,
                  sessionToken: AWSConfig.credentials.data.Credentials.SessionToken,
                 
                }
            }))

            navigate("/", { replace: true });
          } 
        }) 
      }) 

    
        
          

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