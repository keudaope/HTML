class Elain {
  constructor(laji, aani) {
    this.laji = laji;
    this.aani = aani;
  }
  soitaAani() {
    console.log("Eläin sanoo" + this.aani);
  }
}

class Koira extends Elain {
  constructor(laji, aani, vari) {
    super(laji, aani);
    this.vari = vari;
  }
  soitaAani() {
    console.log(`${this.vari} koira haukkuu ${this.aani}`);
  }
}

var koira = new Koira("koira", "wuf wuf", "ruskea");
koira.soitaAani();
