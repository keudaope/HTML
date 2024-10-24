class Kirja {
  constructor(otsikko, kirjailija, sivumaara) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.sivumaara = sivumaara;
  }

  tiedot() {
    console.log(
      `Otsikko: ${this.otsikko}, Kirjailija: ${this.kirjailija}, Sivumäärä: ${this.sivumaara}`
    );
  }
}

const kirja = new Kirja("Tuntematon Sotilas", "Väinö Linna", 490);
kirja.tiedot();
