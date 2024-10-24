class Henkilo {
  constructor(nimi, ika) {
    this.nimi = nimi;
    this.ika = ika;
  }

  esittely() {
    console.log(
      `Hei, nimeni on ${this.nimi} ja olen ${this.ika} vuotta vanha.`
    );
  }
}

class Opiskelija extends Henkilo {
  constructor(nimi, ika, opiskelijanumero) {
    super(nimi, ika);
    this.opiskelijanumero = opiskelijanumero;
  }

  esittely() {
    super.esittely();
    console.log(`Opiskelijanumeroni on ${this.opiskelijanumero}.`);
  }
}

const opiskelija = new Opiskelija("Matti", 21, "12345");
opiskelija.esittely();
