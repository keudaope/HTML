class Pankkitili {
  constructor(tilinro, tilinomistaja, saldo) {
    this.tilinro = tilinro;
    this.tilinomistaja = tilinomistaja;
    this.saldo = saldo;
  }
  talleta(summa) {
    this.saldo += summa;
    console.log(
      `Tilille ${this.tilinro} talletettiin ${summa} €, jolloin tilinsaldo on ${this.saldo} €`
    );
  }
  nosta(summa) {
    if (summa <= this.saldo) {
      this.saldo -= summa;
      console.log(
        `Tililtä ${this.tilinro} nostettiin ${summa} €, jolloin tilinsaldo on ${this.saldo} €`
      );
    } else {
      console.log("Tilillä ei ole riittävästi rahaa");
    }
  }
  siirra(summa, tili) {
    if (summa <= this.saldo) {
      this.saldo -= summa;
      tili.talleta(summa);
      console.log(
        `Tililtä ${this.tilinro} siirrettiin ${summa} € tilille ${tili.tilinro}`
      );
    } else {
      console.log("Tilillä ei ole riittävästi rahaa");
    }
  }
}

var tili1 = new Pankkitili("sb-019", "John Smith", 2000);
var tili2 = new Pankkitili("sb-012", "Jane Doe", 3000);
tili1.talleta(500);
tili2.nosta(500);
tili2.nosta(3000);
tili1.siirra(1500, tili2);
