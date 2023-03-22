import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyC6vFootomhIZ1xF0mWscJMHMQZGRrl_yc",
  authDomain: "zapsurvey-d6dc5.firebaseapp.com",
  projectId: "zapsurvey-d6dc5",
  storageBucket: "zapsurvey-d6dc5.appspot.com",
  messagingSenderId: "398886978423",
  appId: "1:398886978423:web:19412de17a1cee97dd1772",
  measurementId: "G-YYMT5HFRGP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;