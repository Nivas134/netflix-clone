import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDqLxYAQTaTQ2wCthXS8i_Nu9BA1ig03cg",
  authDomain: "netflix-36e52.firebaseapp.com",
  projectId: "netflix-36e52",
  storageBucket: "netflix-36e52.appspot.com",
  messagingSenderId: "601812330702",
  appId: "1:601812330702:web:b078a57a1ca02e6469c89f",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
