class Henkilo {
  constructor(nimi, ika) {
    this.nimi = nimi;
    this.ika = ika;
  }

  esittely() {
    console.log(`Hei, olen ${this.nimi}, ${this.ika} vuotta vanha.`);
  }
}

class Tyontekija extends Henkilo {
  constructor(nimi, ika, tyonumero) {
    super(nimi, ika);
    this.tyonumero = tyonumero;
  }

  esittely() {
    super.esittely();
    console.log(`Työnumeroni on ${this.tyonumero}.`);
  }
}

const tyontekija = new Tyontekija("Sanna", 30, "56789");
tyontekija.esittely();
