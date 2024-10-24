class Tuote {
  constructor(tuoteId, nimi, hinta) {
    this.tuoteId = tuoteId;
    this.nimi = nimi;
    this.hinta = hinta;
  }
  kokonaishinta(maara) {
    return `Kokonaishinta: ${maara * this.hinta}`;
  }
}

class HoitoTuote extends Tuote {
  constructor(tuoteId, nimi, hinta, takuuaika) {
    super(tuoteId, nimi, hinta);
    this.takuuaika = takuuaika;
  }
  kokonaishinta(maara) {
    var kokonaishinta = super.kokonaishinta(maara);
    return kokonaishinta + " € Takuu: " + this.takuuaika + " vuotta";
  }
}

const hoitotuote = new HoitoTuote(1, "Shampoo", 10, 2);
const kokonaishinta = hoitotuote.kokonaishinta(3);
console.log(`${kokonaishinta}`);
