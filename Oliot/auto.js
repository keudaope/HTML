class Auto {
  constructor(vari, rekisterinro, merkki, malli) {
    (this.vari = vari),
      (this.rekisterinro = rekisterinro),
      (this.merkki = merkki),
      (this.malli = malli);
  }
  naytaTiedot() {
    console.log(
      `Väri: ${this.vari}, Rekisterinumero: ${this.rekisterinro}, Merkki: ${this.merkki}, Malli: ${this.malli}`
    );
    return this;
  }
}

var autoYksi = new Auto("punainen", "XZY-789", "Honda", "Accord");
var autoKaksi = new Auto("musta", "ABC-123", "Testa", "S70");
autoKaksi.naytaTiedot();
console.log(
  "Väri: " + autoKaksi.vari + " Rekisterinumero: " + autoKaksi.rekisterinro
);
