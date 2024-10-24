class Opiskelija {
  constructor(nimi) {
    this.nimi = nimi;
    this.kurssit = [];
  }

  lisaaKurssi(kurssi) {
    this.kurssit.push(kurssi);
    console.log(`${this.nimi} on nyt ilmoittautunut kurssille: ${kurssi}`);
  }

  poistaKurssi(kurssi) {
    this.kurssit = this.kurssit.filter((k) => k !== kurssi);
    console.log(`${this.nimi} on poistanut kurssin: ${kurssi}`);
  }

  listaaKurssit() {
    console.log(
      `${
        this.nimi
      } on ilmoittautunut seuraaville kursseille: ${this.kurssit.join(", ")}`
    );
  }
}

const opiskelija = new Opiskelija("Liisa");
opiskelija.lisaaKurssi("Matematiikka");
opiskelija.lisaaKurssi("Fysiikka");
opiskelija.listaaKurssit();
opiskelija.poistaKurssi("Matematiikka");
opiskelija.listaaKurssit();
