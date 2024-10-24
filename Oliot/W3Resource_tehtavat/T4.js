class Pankkitili {
  constructor(tilinro, saldo) {
    this.tilinro = tilinro;
    this.saldo = saldo;
  }
  talleta(summa) {
    this.saldo += summa;
  }
  nosta(summa) {
    this.saldo -= summa;
  }
}

var Jyrintili = new Pankkitili("123456-7890", 100);
Jyrintili.talleta(150);
Jyrintili.nosta(200);
console.log(Jyrintili.saldo);
