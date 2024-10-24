class Auto {
  constructor(merkki, malli, vuosi) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosi = vuosi;
  }

  tiedot() {
    console.log(
      `Merkki: ${this.merkki}, Malli: ${this.malli}, Vuosi: ${this.vuosi}`
    );
  }
}

const auto = new Auto("Toyota", "Corolla", 2021);
auto.tiedot();
