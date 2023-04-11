import "../App.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import firebase from '../app-db';
import { saveForm } from "../app-db";
import { AppendSpreadsheet } from "../App";

function Dashboard() {
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
            onClick={() => AppendSpreadsheet("Happy", "", "", "", "", "", "", "", "", "Medit 2")}
          >
            <img
              className="img-smile"
              src={require('./smiley-icon.png').default}
              alt="smile"
            ></img>
          </button>
          {/* <Link
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
          </Link> */}
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
              src={require('./sad-icon.png').default}
              alt="sad"
            ></img>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
