class Suorakaide {
  constructor(leveys, korkeus) {
    this.leveys = leveys;
    this.korkeus = korkeus;
  }
  laskeAla() {
    return this.leveys * this.korkeus;
  }
  laskeKeha() {
    return this.leveys * 2 + this.korkeus * 2;
  }
}

var suorakaide1 = new Suorakaide(5, 4);
console.log(suorakaide1.laskeAla());
console.log(suorakaide1.laskeKeha());
