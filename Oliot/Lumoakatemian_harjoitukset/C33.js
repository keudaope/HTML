class Auto {
  constructor(merkki, malli) {
    this.merkki = merkki;
    this.malli = malli;
  }
}

class Autokauppa {
  constructor(nimi) {
    this.nimi = nimi;
    this.autot = [];
  }

  lisaaAuto(auto) {
    this.autot.push(auto);
    console.log(`Lisätty auto: ${auto.merkki} ${auto.malli}`);
  }

  listaaAutot() {
    console.log(`${this.nimi}n autot:`);
    this.autot.forEach((auto) => console.log(`${auto.merkki} ${auto.malli}`));
  }
}

const autokauppa = new Autokauppa("AutoCenter");
const auto1 = new Auto("Toyota", "Corolla");
const auto2 = new Auto("Ford", "Mustang");

autokauppa.lisaaAuto(auto1);
autokauppa.lisaaAuto(auto2);
autokauppa.listaaAutot();
