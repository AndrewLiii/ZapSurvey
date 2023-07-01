import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Form from './pages/form'
import Thankyou from './pages/thankyou'
import {tokenURL} from './backend'

const hostURL = 'https://sheets.googleapis.com'

export function GetSpreadsheet() {
  fetch(hostURL + '/v4/spreadsheets/1S-xlfUClbfJzEbUC9evT6191E2VjxYCSoJ67F1nFO1A/?key=AIzaSyBc7Ack1IVeI3tc9Ee8KOVxe9xG_RWNc10&access_token=ya29.a0Ael9sCPGWOI-7PYFuY1QbzMZihCZzjE0nB6EMVHAqjBf6p2AwWZDoMQey_xvNPD1sNc9wunwgSYHtXs7woHcbi3d9lCiRNGYy5byvMilW2qYLW7AinI9AJzSvvnJxCpdlQW8ea9CbFPvJ0K1jIVG6EJZN8PVaCgYKAX4SARISFQF4udJhWSooPazf2dTOfICav0B6kg0163')
}

export function AppendSpreadsheet(emote, kendala1, kendala2, kendala3, kendala4, kendala5, kendala6, lainnya, nomorTelp, outlet, dateTime) {
  let values = [[emote, kendala1, kendala2, kendala3, kendala4, kendala5, kendala6, lainnya, nomorTelp, outlet, dateTime]]
  let ranges = outlet + "!A2:K1000"
  fetch(hostURL + '/v4/spreadsheets/1S-xlfUClbfJzEbUC9evT6191E2VjxYCSoJ67F1nFO1A/values/'+ outlet +'!A2:K1000:append?key=AIzaSyBc7Ack1IVeI3tc9Ee8KOVxe9xG_RWNc10&access_token='+ tokenURL +'&valueInputOption=USER_ENTERED',
  {
    method: 'POST',
    body: JSON.stringify({
      values: values,
      range: ranges,
      majorDimension: "DIMENSION_UNSPECIFIED"
    })
  })
  window.location.replace("https://zaplaundry.com/survey/thankyou?outlet=" + outlet)
}

function App() {
  return (
    <div>
      <header>
        <Router>
          <Routes>
          <Route exact path='/survey' element={<Dashboard />} />
          <Route exact path='/survey/form' element={<Form />} />
          <Route path='https://zaplaundry.com/survey/thankyou' element={<Thankyou />} />
          </Routes>
        </Router>
      </header>
      <body>
      </body>
    </div>
  );
}
export default App;

