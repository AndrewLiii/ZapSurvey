import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Form from './pages/form'

const hostURL = 'https://sheets.googleapis.com'

export function GetSpreadsheet() {
  fetch(hostURL + '/v4/spreadsheets/1S-xlfUClbfJzEbUC9evT6191E2VjxYCSoJ67F1nFO1A?key=AIzaSyBc7Ack1IVeI3tc9Ee8KOVxe9xG_RWNc10')
}

export function AppendSpreadsheet() {
  fetch(hostURL + '/v4/spreadsheets/1S-xlfUClbfJzEbUC9evT6191E2VjxYCSoJ67F1nFO1A/values/A1:A1000:append?key=AIzaSyBc7Ack1IVeI3tc9Ee8KOVxe9xG_RWNc10',{
    method: 'POST',
    body: JSON.stringify({
      values: ['test']
    })
  })
}

function App() {
  // GetSpreadsheet();
  AppendSpreadsheet()
  return (
    <div>
      <header>
        <Router>
          <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/form' element={<Form />} />
          </Routes>
        </Router>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;

// import './App.css';
// var user;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-h1">Zap Survey</h1>
//       </header>
//       <body>
//         <h1>Bagaimana pengalaman anda di Zap Laundry?</h1>
//         <br></br>
//         <div className='App-emote'>
//           <button className='btn-smile' onClick={choose("smile")}><img className="img-smile" src={require('./Images/smiley-icon.png')} alt='smile'></img></button>
//           <button className='btn-neutral' onClick={choose("neutral")}><img className="img-neutral" src={require('./Images/neutral-icon.png')} alt='neutral'></img></button>
//           <button className='btn-sad' onClick={choose("sad")}><img className="img-sad" src={require('./Images/sad-icon.png')} alt='sad'></img></button>
//         </div>
//       </body>
//     </div>
//   );
// }

// function choose(choice){
//   user = choice;
//   console.log(user)
//   return user;
// }

// export default App;
// export {choose};
