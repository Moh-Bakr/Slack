import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyAindd4_r1vIHmZVn0IcBRPCjFaVivKpN8",
   authDomain: "slack-56d76.firebaseapp.com",
   projectId: "slack-56d76",
   storageBucket: "slack-56d76.appspot.com",
   messagingSenderId: "307977581530",
   appId: "1:307977581530:web:8ac5661cf948d86db446e3",
   measurementId: "G-R3ZRZYDX90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };