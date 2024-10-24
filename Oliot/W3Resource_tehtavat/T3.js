class Ajoneuvo {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }
  naytaTiedot() {
    console.log(
      `Merkki: ${this.merkki}, malli: ${this.malli}, vuosimalli: ${this.vuosimalli}`
    );
  }
}

class Auto extends Ajoneuvo {
  constructor(merkki, malli, vuosimalli, ovet) {
    super(merkki, malli, vuosimalli);
    this.ovet = ovet;
  }
  naytaTiedot() {
    super.naytaTiedot();
    console.log(`Ovet: ${this.ovet}`);
  }
}

var ajoneuvo = new Ajoneuvo("Ford", "F-150", 2020);
ajoneuvo.naytaTiedot();
var auto = new Auto("Tesla", "S70", 2017, 4);
auto.naytaTiedot();
