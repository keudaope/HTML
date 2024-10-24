class Henkilo {
  constructor(nimi, ika, maa) {
    this.nimi = nimi;
    this.ika = ika;
    this.maa = maa;
  }
  naytaTiedot() {
    console.log(`Nimi: ${this.nimi}, Ikä: ${this.ika} Maa: ${this.maa}`);
  }
}
var Jyri = new Henkilo("Jyri Lindroos", 59, "Suomi");
var Eeva = new Henkilo("Eeva Tervala", 25, "Suomi");
Jyri.naytaTiedot();
