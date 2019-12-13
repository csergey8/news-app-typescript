import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCzA5_MCR18GtDXUWPSHFqpk08ckVSjogk",
    authDomain: "news-app-fdd78.firebaseapp.com",
    databaseURL: "https://news-app-fdd78.firebaseio.com",
    projectId: "news-app-fdd78",
    storageBucket: "news-app-fdd78.appspot.com",
    messagingSenderId: "478578856595",
    appId: "1:478578856595:web:72c014d86fac9b56727366",
    measurementId: "G-XYKJCQ52HW"
  };

if(firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const db = firebase.database();