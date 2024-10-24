class Pankkitili {
  constructor(tilinumero, saldo = 0) {
    this.tilinumero = tilinumero;
    this.saldo = saldo;
  }

  talleta(summa) {
    this.saldo += summa;
    console.log(
      `Tilille ${this.tilinumero} talletettu ${summa}. Uusi saldo: ${this.saldo}`
    );
  }

  nosta(summa) {
    if (summa > this.saldo) {
      console.log("Tilillä ei ole tarpeeksi rahaa.");
    } else {
      this.saldo -= summa;
      console.log(
        `Tililtä ${this.tilinumero} nostettu ${summa}. Uusi saldo: ${this.saldo}`
      );
    }
  }
}

const tili = new Pankkitili("1234567890", 100);
tili.talleta(50);
tili.nosta(30);
