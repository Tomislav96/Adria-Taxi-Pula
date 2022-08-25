import firebase from 'firebase/compat/app'

require ("firebase/compat/auth");
require ("firebase/compat/firestore");
require ("firebase/compat/storage");
require ("firebase/compat/functions");


var firebaseConfig = {
    apiKey: "AIzaSyDjthy18FjK5eMO_qHbsMA-IMLDgFa-TlA",
    authDomain: "adriataxipula.firebaseapp.com",
    projectId: "adriataxipula",
    storageBucket: "adriataxipula.appspot.com",
    messagingSenderId: "254167161857",
    appId: "1:254167161857:web:fe3287f9a32b1fa26ff400",
    measurementId: "G-3C9WL96VY4"
  };

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth()
  const db=firebase.firestore
  const storage=firebase.storage()
  const functions=firebase.functions()


  export {
    firebase,
    auth,
    db,
    storage,
    functions
  }