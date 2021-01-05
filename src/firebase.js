import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvv0dHR1J6wJYdgQ8QR9PxQnDlgCymW-4",
    authDomain: "clone-673a6.firebaseapp.com",
    projectId: "clone-673a6",
    storageBucket: "clone-673a6.appspot.com",
    messagingSenderId: "929687959192",
    appId: "1:929687959192:web:cbd4e18b39fd9ca69502ed",
    measurementId: "G-BP5GPP15L3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();



export { db, auth, provider};