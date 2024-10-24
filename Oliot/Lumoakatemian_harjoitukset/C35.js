class Elain {
  constructor(nimi) {
    this.nimi = nimi;
  }
}

class Leijona extends Elain {
  aani() {
    console.log("Leijona karjuu");
  }
}

class Kirahvi extends Elain {
  aani() {
    console.log("Kirahvi ääntelee hiljaa");
  }
}

class Elaintarha {
  constructor(nimi) {
    this.nimi = nimi;
    this.elaimet = [];
  }

  lisaaElain(elain) {
    this.elaimet.push(elain);
    console.log(`Lisätty eläin: ${elain.nimi}`);
  }

  listaaElaimet() {
    console.log(`${this.nimi}:n eläimet:`);
    this.elaimet.forEach((elain) => console.log(elain.nimi));
  }
}

const elaintarha = new Elaintarha("Korkeasaari");
const leijona = new Leijona("Simba");
const kirahvi = new Kirahvi("Gerry");

elaintarha.lisaaElain(leijona);
elaintarha.lisaaElain(kirahvi);
elaintarha.listaaElaimet();
