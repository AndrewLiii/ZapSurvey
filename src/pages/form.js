
import { useNavigate } from 'react-router';
import { AppendSpreadsheet } from '../App';
import '../App.css';

function Form() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const outletQuery =  params.outlet;
  const link = '/survey/thankyou?outlet=' + outletQuery
  const dateTime = Date()
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    //get querystring ?emotion value
    const emotion = new URLSearchParams(window.location.search).get('emotion');
    const mood = emotion === '1' ? "Neutral" : "Sad";
    //get all value from inputs
    const lainnya = document.getElementById('lainnya').value;
    const nomorTelp = document.getElementById('nomor-telp').value;
    //get all checkbox

    // const checkboxes = document.querySelectorAll(".cb")
    // const selected = Array.from(checkboxes).map(x => x.value)
    // console.log(selected)

    const cb1 = document.getElementById('cb1').checked;
    const cb2 = document.getElementById('cb2').checked;
    const cb3 = document.getElementById('cb3').checked;
    const cb4 = document.getElementById('cb4').checked;
    const cb5 = document.getElementById('cb5').checked;
    const cb6 = document.getElementById('cb6').checked;

    //put value as key of checked on data, otherwise ignore
    const data = {
      kendala1: "",
      kendala2: "",
      kendala3: "",
      kendala4: "",
      kendala5: "",
      kendala6: "",
      lainnya: lainnya,
      nomorTelp: nomorTelp,
      emote: mood,
    }
    if (cb1) {
      data.kendala1 = "yes";
    } else {
      data.kendala1 = "no";
    }
    if (cb2) {
      data.kendala2 = "yes";
    } else {
      data.kendala2 = "no";
    }
    if (cb3) {
      data.kendala3 = "yes";
    } else {
      data.kendala3 = "no";
    }
    if (cb4) {
      data.kendala4 = "yes";
    } else {
      data.kendala4 = "no";
    }
    if (cb5) {
      data.kendala5 = "yes";
    } else {
      data.kendala5 = "no";
    }
    if (cb6) {
      data.kendala6 = "yes";
    } else {
      data.kendala6 = "no";
    }
    AppendSpreadsheet(data.emote, data.kendala1,data.kendala2, data.kendala3, data.kendala4, data.kendala5, data.kendala6,data.lainnya, data.nomorTelp, outletQuery, dateTime)
    navigate(link)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header> 
      <body className='forms'>
      <h2>Apa jenis kendala yang dialami?</h2>
        <form className='survey-form' onSubmit={handleForm} action={link} method="post">
          <div className='kendala-form'>
          <input type="checkbox" id="cb1" name="cb1" value="Pegawai kurang sopan" className='cb'></input>
          <label for="cb1">Pegawai kurang sopan</label> <br></br>
          <input type="checkbox" id="cb2" name="cb2" value="Baju tertukar" className='cb'></input>
          <label for="cb2">Baju tertukar</label> <br></br>
          <input type="checkbox" id="cb3" name="cb3" value="Baju luntur" className='cb'></input>
          <label for="cb3">Baju luntur</label> <br></br>
          <input type="checkbox" id="cb4" name="cb4" value="AC panas" className='cb'></input>
          <label for="cb4">AC panas</label> <br></br>
          <input type="checkbox" id="cb5" name="cb5" value="Baju hilang" className='cb'></input>
          <label for="cb5">Baju hilang</label> <br></br>
          <input type="checkbox" id="cb6" name="cb6" value="Barang hilang" className='cb'></input>
          <label for="cb6">Barang hilang</label> 
          <br></br>
          <input type="text" id="lainnya" name="lainnya" placeholder='Lainnya...'></input>
          </div>  
          <br></br>
          <h2>Apakah anda ingin dikontak kami?
            <br></br> Jika iya, mohon isi no. telp anda dibawah ini</h2>
          <input type="number" id="nomor-telp" name="nomor-telp" placeholder='08123456789'></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </div>
  );

}

export default Form;
