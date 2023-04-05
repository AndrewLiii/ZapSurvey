import { AppendSpreadsheet } from '../App';
import '../App.css';

function Form() {
  const handleForm = (e) => {
    e.preventDefault();
    //get querystring ?emotion value
    const emotion = new URLSearchParams(window.location.search).get('emotion');
    const mood = emotion === '1' ? "Neutral" : "Sad";
    //get all value from inputs
    const lainnya = document.getElementById('lainnya').value;
    const nomorTelp = document.getElementById('nomor-telp').value;
    //get all checkbox
    const cb1 = document.getElementById('cb1').checked;
    const cb2 = document.getElementById('cb2').checked;
    const cb3 = document.getElementById('cb3').checked;
    const cb4 = document.getElementById('cb4').checked;
    const cb5 = document.getElementById('cb5').checked;
    const cb6 = document.getElementById('cb6').checked;

    //put value as key of checked on data, otherwise ignore
    const data = {
      kendala: [],
      lainya: lainnya,
      nomorTelp: nomorTelp,
      emote: mood,
    }
    if (cb1) {
      data.kendala.push(document.getElementById('cb1').value);
    }
    if (cb2) {
      data.kendala.push(document.getElementById('cb2').value);
    }
    if (cb3) {
      data.kendala.push(document.getElementById('cb3').value);
    }
    if (cb4) {
      data.kendala.push(document.getElementById('cb4').value);
    }
    if (cb5) {
      data.kendala.push(document.getElementById('cb5').value);
    }
    if (cb6) {
      data.kendala.push(document.getElementById('cb6').value);
    }

    AppendSpreadsheet(data.emote)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header> 
      <body>
      <h2>Apa jenis kendala yang dialami?</h2>
        <form className='survey-form' onSubmit={handleForm}>
          <div className='kendala-form'>
          <input type="checkbox" id="cb1" name="cb1" value="Pegawai kurang sopan"></input>
          <label for="cb1">Pegawai kurang sopan</label> <br></br>
          <input type="checkbox" id="cb2" name="cb2" value="Baju tertukar"></input>
          <label for="cb2">Baju tertukar</label> <br></br>
          <input type="checkbox" id="cb3" name="cb3" value="Baju luntur"></input>
          <label for="cb3">Baju luntur</label> <br></br>
          <input type="checkbox" id="cb4" name="cb4" value="AC panas"></input>
          <label for="cb4">AC panas</label> <br></br>
          <input type="checkbox" id="cb5" name="cb5" value="Baju hilang"></input>
          <label for="cb5">Baju hilang</label> <br></br>
          <input type="checkbox" id="cb6" name="cb6" value="Barang hilang"></input>
          <label for="cb6">Barang hilang</label> <br></br>
          <input type="text" id="lainnya" name="lainnya" placeholder='Lainnya...'></input>
          </div>
          <br></br>
          <h2>Apakah anda ingin dikontak kami?
            <br></br> Jika iya, mohon isi no. telp anda dibawah ini</h2>
          <input type="number" id="nomor-telp" name="nomor-telp" placeholder='08xxxxxxxxx'></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </body>
    </div>
  );
}

export default Form;
