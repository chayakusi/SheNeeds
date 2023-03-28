import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

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

const organizations = [];
const users = [];
for (let i = 0; i < 399; i++) {
  const organization = {
    organizationName: `Organization ${i + 1}`,
    address: `${Math.floor(Math.random() * 1000) + 1} Main Street`,
    zipcode: Math.floor(Math.random() * 50) + 75080,
    inventory: Math.floor(Math.random() * 91) + 10,
    latitude: Math.random() * (90 - -90) + -90,
    longitude: Math.random() * (180 - -180) + -180,
  };
  const user = {
    name: `Random Name${i + 1}`,
    age: Math.floor(Math.random() * (60 - 20 + 1) + 20),
    contactNo: Math.floor(Math.random() * 9000000000) + 1000000000,
    gender: Math.random() < 0.5 ? "Male" : "Female",
    isOrganization: true,
  };
  users.push(user);
  organizations.push(organization);
}

organizations.forEach((data, index) => {
  const rand = index - Math.floor(Math.random() * 10) + 1;
  database.ref(`organizations/Owner-${rand}`).set(data);
  database.ref(`users/Owner-${rand}`).set(users[index]);
});

export { auth, firestore, database };
export default firebase;
