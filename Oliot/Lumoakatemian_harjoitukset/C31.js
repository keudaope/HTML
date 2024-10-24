class Taulukko {
  constructor() {
    this.alkiot = [];
  }

  lisaaAlkio(alkio) {
    this.alkiot.push(alkio);
    console.log(`Alkio ${alkio} lisätty taulukkoon.`);
  }

  poistaAlkio(alkio) {
    this.alkiot = this.alkiot.filter((a) => a !== alkio);
    console.log(`Alkio ${alkio} poistettu taulukosta.`);
  }

  haeAlkio(alkio) {
    const löytyi = this.alkiot.includes(alkio);
    console.log(
      löytyi ? `Alkio ${alkio} löytyi.` : `Alkiota ${alkio} ei löytynyt.`
    );
  }
}

const taulukko = new Taulukko();
taulukko.lisaaAlkio(3);
taulukko.lisaaAlkio(5);
taulukko.haeAlkio(3);
taulukko.poistaAlkio(3);
taulukko.haeAlkio(3);
