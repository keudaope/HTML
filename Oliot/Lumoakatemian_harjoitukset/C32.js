class Tyontekija {
  constructor(nimi, tyonumero) {
    this.nimi = nimi;
    this.tyonumero = tyonumero;
  }
}

class Yritys {
  constructor(nimi) {
    this.nimi = nimi;
    this.tyontekijat = [];
  }

  lisaaTyontekija(tyontekija) {
    this.tyontekijat.push(tyontekija);
    console.log(
      `Lisätty työntekijä: ${tyontekija.nimi}, työnumero: ${tyontekija.tyonumero}`
    );
  }

  listaaTyontekijat() {
    console.log(`${this.nimi}:n työntekijät:`);
    this.tyontekijat.forEach((tyontekija) =>
      console.log(`${tyontekija.nimi}, työnumero: ${tyontekija.tyonumero}`)
    );
  }
}

const yritys = new Yritys("TechCorp");
const tyontekija1 = new Tyontekija("Anna", "001");
const tyontekija2 = new Tyontekija("Mikko", "002");

yritys.lisaaTyontekija(tyontekija1);
yritys.lisaaTyontekija(tyontekija2);
yritys.listaaTyontekijat();
