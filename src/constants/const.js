import {Amplify} from "aws-amplify";
import awsmobile from "../aws-exports";

export default function configAmplify(){
    Amplify.configure(awsmobile) 
}



