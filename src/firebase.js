import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCF42Sm38frmveifcIFw2zoShMUhCl05aI",
    authDomain: "discord-clone-afeer.firebaseapp.com",
    databaseURL: "https://discord-clone-afeer.firebaseio.com",
    projectId: "discord-clone-afeer",
    storageBucket: "discord-clone-afeer.appspot.com",
    messagingSenderId: "60054199439",
    appId: "1:60054199439:web:6dff5ce6830e3be6a864fa",
    measurementId: "G-CDKGR2VYTL"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;