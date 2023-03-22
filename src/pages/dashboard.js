import '../App.css';
import React, { useRef, useState } from 'react';
import firebase from '../app-db'
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
    emote: ''
   
})

const PostData =async(e)=>{
    e.preventDefault()

    const{emote}=emotes;

   const res=await fetch("https://zapsurvey-d6dc5-default-rtdb.asia-southeast1.firebasedatabase.app/",
   {
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        emote
       })
    })

}
  const auth = firebase.auth();
  const db = firebase.database();
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
      <body className='dash-body'>
        <h1>Bagaimana pengalaman anda di Zap Laundry?</h1>
        <br></br>
        <div className='App-emote'>
          <form id="myForm">
          <button className='btn-smile' id="emotion" name="emotion" type="submit" onClick={PostData}><img className="img-smile" src={require('../Images/smiley-icon.png')} alt='smile'></img></button>
          <button className='btn-neutral' id="emotion" name="emotion" type="submit" value="neutral"><img className="img-neutral" src={require('../Images/neutral-icon.png')} alt='neutral'></img></button>
          <button className='btn-sad' id="emotion" name="emotion" type="submit" value="sad"><img className="img-sad" src={require('../Images/sad-icon.png')} alt='sad'></img></button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;