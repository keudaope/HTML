class Elain {
  constructor(nimi = "") {
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

class Koira extends Elain {
  constructor(nimi = "", tassut = 4, turkki = "") {
    super(nimi);
    this._tassut = tassut;
    this._turkki = turkki;
  }

  // Getter tassujen määrän hakemiseksi
  get tassut() {
    return this._tassut;
  }

  // Setter tassujen määrän asettamiseksi
  set tassut(uudetTassut) {
    this._tassut = uudetTassut;
  }

  // Getter turkin värin hakemiseksi
  get turkki() {
    return this._turkki;
  }

  // Setter turkin värin asettamiseksi
  set turkki(uusiTurkki) {
    this._turkki = uusiTurkki;
  }

  // Aantelehtii-metodi
  Aantelehtii(aani) {
    console.log(this._nimi + " " + aani);
  }
}

// Luo koira-olio oletuskonstruktorilla
const koira = new Koira("Haukkuja");
console.log("Olio koira, nimi: " + koira.nimi);
console.log("Tassujen määrä: " + koira.tassut);

// Muuta koiran nimi ja tassujen määrä
koira.nimi = "Rafu";
koira.tassut = 3;
console.log("Koiran uusi nimi: " + koira.nimi);
console.log("Tassujen uusi määrä: " + koira.tassut);

// Kutsu Aantelehtii-metodia
koira.Aantelehtii("haukkuu"); // Tulostaa "Rafu haukkuu"
