import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  //ADD TOUR FIREBASE CONFIG
};

const firebase = Firebase.initializeApp(config);

export { firebase };
