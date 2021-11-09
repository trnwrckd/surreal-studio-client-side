import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInit = () => {
    initializeApp(firebaseConfig);
}

export default authInit;