class Pelaaja {
  constructor(nimi) {
    this.nimi = nimi;
    this.pisteet = 0;
    this.taso = 1;
  }

  lisaaPisteita(maara) {
    this.pisteet += maara;
    console.log(
      `${this.nimi} sai ${maara} pistettä. Kokonaispisteet: ${this.pisteet}`
    );
  }

  nostaTasoa() {
    this.taso += 1;
    console.log(`${this.nimi} nousi tasolle ${this.taso}`);
  }
}

const pelaaja = new Pelaaja("Matti");
pelaaja.lisaaPisteita(100);
pelaaja.nostaTasoa();
