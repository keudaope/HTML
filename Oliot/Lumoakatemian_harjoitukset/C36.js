class Opettaja {
  constructor(nimi, aine) {
    this.nimi = nimi;
    this.aine = aine;
  }
}

class Koulu {
  constructor(nimi) {
    this.nimi = nimi;
    this.opettajat = [];
  }

  lisaaOpettaja(opettaja) {
    this.opettajat.push(opettaja);
    console.log(`Lisätty opettaja: ${opettaja.nimi}, aine: ${opettaja.aine}`);
  }

  listaaOpettajat() {
    console.log(`${this.nimi}:n opettajat:`);
    this.opettajat.forEach((opettaja) =>
      console.log(`${opettaja.nimi}, aine: ${opettaja.aine}`)
    );
  }
}

const koulu = new Koulu("Helsingin Lukio");
const opettaja1 = new Opettaja("Maija", "Matematiikka");
const opettaja2 = new Opettaja("Kalle", "Fysiikka");

koulu.lisaaOpettaja(opettaja1);
koulu.lisaaOpettaja(opettaja2);
koulu.listaaOpettajat();
