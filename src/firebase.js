import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

// import firebase from "firebase/app";
import "firebase/compat/firestore"; 
import "firebase/auth";
import "firebase/compat/storage";
import { initializeApp } from 'firebase/app';


// firebase-database
// post store in storage


const firebaseConfig = {
  apiKey: "AIzaSyDPSZavLka2_55bY4LUGzU2fDziyBXEv-s",
  authDomain: "facebook-3f91a.firebaseapp.com",
  projectId: "facebook-3f91a",
  storageBucket: "facebook-3f91a.appspot.com",
  messagingSenderId: "773742394585",
  appId: "1:773742394585:web:049fee1409d6ed295c92c8"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
const timestamp=firebase.firestore.FieldValue.serverTimestamp();

export {db, provider, auth, storage, timestamp};
