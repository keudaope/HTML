class Ajoneuvo {
  constructor() {
    this.matkustajat = [];
  }

  lisaaMatkustaja(nimi) {
    this.matkustajat.push(nimi);
    console.log(`${nimi} lisätty ajoneuvoon.`);
  }

  poistaMatkustaja(nimi) {
    this.matkustajat = this.matkustajat.filter(
      (matkustaja) => matkustaja !== nimi
    );
    console.log(`${nimi} poistettu ajoneuvosta.`);
  }

  listaaMatkustajat() {
    console.log("Ajoneuvon matkustajat:");
    this.matkustajat.forEach((matkustaja) => console.log(matkustaja));
  }
}

const ajoneuvo = new Ajoneuvo();
ajoneuvo.lisaaMatkustaja("Anna");
ajoneuvo.lisaaMatkustaja("Pekka");
ajoneuvo.listaaMatkustajat();
ajoneuvo.poistaMatkustaja("Anna");
ajoneuvo.listaaMatkustajat();
