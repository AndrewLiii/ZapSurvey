import "../App.css";
import { Link } from "react-router-dom";
import { AppendSpreadsheet } from "../App";

function Dashboard() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const outletQuery =  params.outlet;

  const dateTime = Date();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header>
      <body className="dash-body">
        <h1>Bagaimana pengalaman anda di Zap Laundry?</h1>
        <br></br>
        <div className="App-emote">
          <Link
          to={"/survey/thankyou?outlet=" + outletQuery}
          className="btn-smile"
          id="emotion"
          name="emotion"
          type="submit"
          onClick={() => AppendSpreadsheet("Happy", "", "", "", "", "", "", "", "", outletQuery, dateTime)}
          >
            <img
              className="img-smile"
              src={require('./smiley-icon.png').default}
              alt="smile"
            ></img>
          </Link>
          <Link
            className="btn-sad"
            id="emotion"
            name="emotion"
            type="submit"
            value="sad"
            to={"/survey/form?emotion=2&outlet=" + outletQuery}
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
