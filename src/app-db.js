import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getFirestore, collection, setDoc, doc, g   } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyC6vFootomhIZ1xF0mWscJMHMQZGRrl_yc",
  authDomain: "zapsurvey-d6dc5.firebaseapp.com",
  projectId: "zapsurvey-d6dc5",
  storageBucket: "zapsurvey-d6dc5.appspot.com",
  messagingSenderId: "398886978423",
  appId: "1:398886978423:web:19412de17a1cee97dd1772",
  measurementId: "G-YYMT5HFRGP"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveForm = async (data) => {
    const dokumenBaru = doc(db, "zapsurvey", "Summary-" + new Date().toString());
    const dataYangDikirim = data;
    await setDoc(dokumenBaru, dataYangDikirim);
}

export default app;