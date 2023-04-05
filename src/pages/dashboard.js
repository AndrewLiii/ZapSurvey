import "../App.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import firebase from '../app-db';
import { saveForm } from "../app-db";
import { AppendSpreadsheet } from "../App";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/database';

// firebase.initializeApp({
//   apiKey: "AIzaSyC6vFootomhIZ1xF0mWscJMHMQZGRrl_yc",
//   authDomain: "zapsurvey-d6dc5.firebaseapp.com",
//   projectId: "zapsurvey-d6dc5",
//   storageBucket: "zapsurvey-d6dc5.appspot.com",
//   messagingSenderId: "398886978423",
//   appId: "1:398886978423:web:19412de17a1cee97dd1772",
//   measurementId: "G-YYMT5HFRGP"
// })
// const firestore = firebase.firestore();

function Dashboard() {
  const [emotes, setEmotes] = useState({
    emote: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { emote } = emotes;

    const res = await fetch(
      "https://zapsurvey-d6dc5-default-rtdb.asia-southeast1.firebasedatabase.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emote,
        }),
      }
    );
  };
  // const auth = firebase.auth();
  // const db = firebase.database();
  // const emoteRef = firestore.collection('emote')
  // const [formValue, setFormValue] = useState('');

  // const sendMessage = async(e) => {

  //   e.preventDefault();

  //   await emoteRef.add({
  //     emote: formValue
  //   })

  //   setFormValue('')
  // }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header>
      <body className="dash-body">
        <h1>Bagaimana pengalaman anda di Zap Laundry?</h1>
        <br></br>
        <div className="App-emote">
          <button
            className="btn-smile"
            id="emotion"
            name="emotion"
            type="submit"
            onClick={() => AppendSpreadsheet("Happy")}
          >
            <img
              className="img-smile"
              src={require("../Images/smiley-icon.png")}
              alt="smile"
            ></img>
          </button>
          <Link
            className="btn-neutral"
            id="emotion"
            name="emotion"
            type="submit"
            value="neutral"
            to="/form?emotion=1"
          >
            <img
              className="img-neutral"
              src={require("../Images/neutral-icon.png")}
              alt="neutral"
            ></img>
          </Link>
          <Link
            className="btn-sad"
            id="emotion"
            name="emotion"
            type="submit"
            value="sad"
            to="/form?emotion=2"
          >
            <img
              className="img-sad"
              src={require("../Images/sad-icon.png")}
              alt="sad"
            ></img>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
