import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firsebase-config";

const initializedAuthentication =()=>{

  initializeApp(firebaseConfig);
}


export default initializedAuthentication;