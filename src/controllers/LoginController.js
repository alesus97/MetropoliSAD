
import { Amplify, Auth} from "aws-amplify";
import  {config as AWSConfig, CognitoIdentityCredentials} from 'aws-sdk'
import { AUTH_USER_TOKEN_KEY } from "../constants/const";
import awsconfig from "../constants/aws-exports"
import { useNavigate } from "react-router-dom";
import LoginView from "../pages/Auth/LoginView";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import AuthLayout from "../components/AuthLayout";
import { Groups } from "@mui/icons-material";


export default function LoginController(){
    Amplify.configure(awsconfig);
    const navigate = useNavigate();
    AWSConfig.region = "eu-central-1";
  
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email")
      const password = data.get("password")
  
      try {
        const user = await Auth.signIn(email, password)

        dispatch(login({
          userInfo: user.attributes, 
          role: user.signInUserSession.accessToken.payload["cognito:groups"][0]
      })) 

     

      
       Auth.currentSession()
      .then((result) =>{

        /* console.log(result) */
       
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

            console.log(AWSConfig.credentials.data.Credentials)
              localStorage.setItem("IdentityPoolCredentials", JSON.stringify(AWSConfig.credentials.data.Credentials))  

          } 
        }) 
      }) 

      localStorage.setItem( AUTH_USER_TOKEN_KEY, user.signInUserSession.accessToken.jwtToken );
        
          navigate("/", { replace: true });

      }catch(err){
        console.log("ERRORE")
        throw err
      }
  
    };

    return(
      <AuthLayout handleSubmit={handleSubmit} >
        <LoginView/>
      </AuthLayout>
        
    );
}