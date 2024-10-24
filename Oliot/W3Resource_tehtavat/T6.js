class Tyontekija {
  constructor(nimi, palkka) {
    this.nimi = nimi;
    this.palkka = palkka;
  }
  laskeVuosipalkka() {
    return this.palkka * 12;
  }
}

class Esimies extends Tyontekija {
  constructor(nimi, palkka, osasto) {
    super(nimi, palkka);
    this.osasto = osasto;
  }
  laskeVuosipalkka(bonus) {
    return this.palkka * 12 + bonus;
  }
}

var emies1 = new Esimies("Eeva Tervala", 5200, "TiVi");
var emies2 = new Esimies("Heikki Virtala", 6450, "Kampus 4");

console.log(emies1.laskeVuosipalkka(1200));
console.log(emies2.laskeVuosipalkka(3600));
