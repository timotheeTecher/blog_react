import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBYu6TY37v4JhVyTB1sJUVR-mvIFhJ5KPo",
  authDomain: "blog-react-fa854.firebaseapp.com",
  databaseURL: "https://blog-react-fa854-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-react-fa854",
  storageBucket: "blog-react-fa854.appspot.com",
  messagingSenderId: "130200275115",
  appId: "1:130200275115:web:9560b1b38f388ba65b4fee"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;