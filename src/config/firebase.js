import firebase from "firebase";
var firebaseConfig = {
   //firebasse sdk key
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
