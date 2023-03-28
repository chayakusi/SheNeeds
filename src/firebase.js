import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyC2ELrn-DoWT3Y2G9yEj2pln2_xkzQEmf8",
  authDomain: "gdsc-a76be.firebaseapp.com",
  projectId: "gdsc-a76be",
  storageBucket: "gdsc-a76be.appspot.com",
  messagingSenderId: "647244094330",
  appId: "1:647244094330:web:3592f4d7d1f336c045d4c3",
  databaseURL: "https://gdsc-a76be-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

export { auth, firestore, database };
export default firebase;
