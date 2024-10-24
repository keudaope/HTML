class Kirja {
  constructor(nimi, kirjailija, julkaisuvuosi) {
    this.nimi = nimi;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
  }
  naytaTiedot() {
    console.log(
      `Nimi: ${this.nimi}. kirjailija: ${this.kirjailija}, julkaisuvuosi: ${this.julkaisuvuosi}`
    );
  }
}

class EKirja extends Kirja {
  constructor(nimi, kirjailija, julkaisuvuosi, hinta) {
    super(nimi, kirjailija, julkaisuvuosi);
    this.hinta = hinta;
  }
  naytaTiedot() {
    console.log(
      `Nimi: ${this.nimi}. kirjailija: ${this.kirjailija}, julkaisuvuosi: ${this.julkaisuvuosi}, hinta: ${this.hinta}`
    );
  }
}

var eKirja = new EKirja("Vares", "Reijo Mäki", 1997, 29.95);
eKirja.naytaTiedot();
