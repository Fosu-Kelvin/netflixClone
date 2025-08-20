import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'; // Add Firestore import
import 'firebase/compat/auth';      // Add Auth import

const firebaseConfig = {
    apiKey: "AIzaSyDUXRZif66v_a5BHPtReE_uxJ3ywZxfX0k",
    authDomain: "netflix-clone1-91149.firebaseapp.com",
    projectId: "netflix-clone1-91149",
    storageBucket: "netflix-clone1-91149.firebasestorage.app",
    messagingSenderId: "340162016906",
    appId: "1:340162016906:web:42df1668db09e952efdf73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export {auth} ;
  export default db;