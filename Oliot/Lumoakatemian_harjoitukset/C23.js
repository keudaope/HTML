class Tuote {
  constructor(nimi, hinta) {
    this.nimi = nimi;
    this.hinta = hinta;
  }
}

class Kauppa {
  constructor() {
    this.tuotteet = [];
  }

  lisaaTuote(tuote) {
    this.tuotteet.push(tuote);
    console.log(`Lisätty tuote: ${tuote.nimi}, hinta: ${tuote.hinta}`);
  }

  poistaTuote(tuotenimi) {
    this.tuotteet = this.tuotteet.filter((tuote) => tuote.nimi !== tuotenimi);
    console.log(`Poistettu tuote: ${tuotenimi}`);
  }

  listaaTuotteet() {
    console.log("Kaupan tuotteet:");
    this.tuotteet.forEach((tuote) =>
      console.log(`${tuote.nimi}: ${tuote.hinta} €`)
    );
  }
}

const kauppa = new Kauppa();
const omena = new Tuote("Omena", 1.2);
const banaani = new Tuote("Banaani", 0.8);
kauppa.lisaaTuote(omena);
kauppa.lisaaTuote(banaani);
kauppa.listaaTuotteet();
kauppa.poistaTuote("Omena");
kauppa.listaaTuotteet();
