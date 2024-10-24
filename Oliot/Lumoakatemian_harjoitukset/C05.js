class Elain {
  constructor(nimi = "kana") {
    this._nimi = nimi;
  }

  // Getter nimen hakemiseksi
  get nimi() {
    return this._nimi;
  }

  // Setter nimen asettamiseksi
  set nimi(uusiNimi) {
    this._nimi = uusiNimi;
  }

  // Syö-metodi
  Syo() {
    console.log(this._nimi + " syö - mumm mumm mumm");
  }
}

// Luo kana-olio oletuskonstruktorilla
const kana = new Elain();
console.log("Olio kana, nimi: " + kana.nimi);

// Muuta kanan nimi
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " + kana.nimi);

// Kutsu Syo-metodia
kana.Syo();
