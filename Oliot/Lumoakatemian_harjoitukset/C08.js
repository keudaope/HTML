class Ajoneuvo {
  constructor(merkki, malli, vuosimalli) {
    this._merkki = merkki;
    this._malli = malli;
    this._vuosimalli = vuosimalli;
  }

  aja() {
    console.log("Ajetaan ajoneuvoa: " + this._merkki + " " + this._malli);
  }

  kiihdyta() {
    console.log("Kiihdytetään ajoneuvoa: " + this._merkki + " " + this._malli);
  }

  jarruta() {
    console.log("Jarrutetaan ajoneuvoa: " + this._merkki + " " + this._malli);
  }

  kaynnista() {
    console.log("Käynnistetään ajoneuvo: " + this._merkki + " " + this._malli);
  }

  sammuta() {
    console.log("Sammutetaan ajoneuvo: " + this._merkki + " " + this._malli);
  }
}

class Auto extends Ajoneuvo {
  constructor(merkki, malli, vuosimalli, pyorat = 4) {
    super(merkki, malli, vuosimalli);
    this._pyorat = pyorat;
  }

  // ... (edellinen koodi) ...
}

class Moottoripyora extends Auto {
  constructor(merkki, malli, vuosimalli, pyorat = 2) {
    super(merkki, malli, vuosimalli, pyorat);
  }

  // ... (edellinen koodi) ...
}

class TestiAjo {
  constructor() {
    const mersu = new Auto("Mercedes-Benz", "Sarja S", 2023);
    const moottoripyora = new Moottoripyora(
      "Harley-Davidson",
      "Sportster",
      2023
    );

    mersu.aja();
    console.log(mersu._pyorat);
    moottoripyora.aja();
    console.log(moottoripyora._pyorat);
  }
}

const testiAjo = new TestiAjo();
