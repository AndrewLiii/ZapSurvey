import "../App.css";
import React, { useRef, useState } from "react";

function Thankyou() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const outletQuery =  params.outlet;

  return (
    <div className="App">
        <head><meta http-equiv="refresh" content={"3;url=https://zaplaundry.com/survey/?outlet=" + outletQuery} /></head>
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header>
      <body className="dash-body">
        <h1>Terima kasih telah mengisi survey</h1>
      </body>
    </div>
  );
}
export default Thankyou;
