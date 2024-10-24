class Kayttaja {
  constructor(nimi, sahkoposti) {
    this.nimi = nimi;
    this.sahkoposti = sahkoposti;
  }

  tervehdys() {
    console.log(`Hei, ${this.nimi}!`);
  }
}

const kayttaja = new Kayttaja("Matti", "matti@example.com");
kayttaja.tervehdys();
