import '../App.css';

function Form() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Zap Survey</h1>
      </header>
      <body>
      <h2>Apa jenis kendala yang dialami?</h2>
        <form className='survey-form'>
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
          <input type="text" id="kendala" name="kendala" placeholder='Lainnya...'></input>
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
