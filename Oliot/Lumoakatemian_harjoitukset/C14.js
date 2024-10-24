class Nelio {
  constructor(sivu_pituus) {
    this.sivu_pituus = sivu_pituus;
  }

  alue() {
    return this.sivu_pituus * this.sivu_pituus;
  }
}

const nelio = new Nelio(4);
console.log(nelio.alue());
