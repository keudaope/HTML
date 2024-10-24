class Kirja {
  constructor(otsikko, kirjailija) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.luettu = false;
    this.lukupaivamaara = null;
  }

  merkitseLuetuksi() {
    this.luettu = true;
    this.lukupaivamaara = new Date();
    console.log(`Kirja "${this.otsikko}" on merkitty luetuksi.`);
  }
}

class Kirjasto {
  constructor() {
    this.kirjat = [];
  }

  lisaaKirja(kirja) {
    this.kirjat.push(kirja);
    console.log(`Lisätty kirja: ${kirja.otsikko}`);
  }

  listaaKirjat() {
    console.log("Kirjaston kirjat:");
    this.kirjat.forEach((kirja) => {
      const status = kirja.luettu
        ? `Luettu: ${kirja.lukupaivamaara}`
        : "Ei vielä luettu";
      console.log(`${kirja.otsikko} - ${status}`);
    });
  }
}

const kirjasto = new Kirjasto();
const kirja1 = new Kirja("Lordi of the Rings", "J.R.R. Tolkien");
const kirja2 = new Kirja("Harry Potter", "J.K. Rowling");

kirjasto.lisaaKirja(kirja1);
kirjasto.lisaaKirja(kirja2);
kirja1.merkitseLuetuksi();
kirjasto.listaaKirjat();
