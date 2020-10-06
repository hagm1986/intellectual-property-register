import React from 'react';
//import './App.css';
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import * as env from './env';

 var firebaseConfig = {
  apiKey: env.REACT_APP_APIKEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  databaseURL: env.REACT_APP_DATABASEURL,
  projectId: env.REACT_APP_PROJECTID,
  storageBucket: env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_MESSAGINGSENDERID,
  appID: env.REACT_APP_APPID,
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    
    <Routes/>
   );
}

export default App;
