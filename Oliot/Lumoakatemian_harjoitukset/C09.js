class Pankkitili {
  constructor() {
    this.saldo = 0;
  }

  talleta(maara) {
    if (maara > 0) {
      this.saldo += maara;
      console.log(
        `Talletettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`
      );
    } else {
      console.log("Talletettava määrä on virheellinen.");
    }
  }

  nosta(maara) {
    if (maara > 0) {
      if (maara <= this.saldo) {
        this.saldo -= maara;
        console.log(
          `Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`
        );
      } else {
        console.log("Nostettava määrä ylittää tilin saldon.");
      }
    } else {
      console.log("Nostettava määrä on virheellinen.");
    }
  }
}

// Käytetään Pankkitili-luokkaa
const tili = new Pankkitili();
tili.talleta(100); // Talletettu 100 euroa. Uusi saldo: 100 euroa.
tili.nosta(50); // Nostettu 50 euroa. Uusi saldo: 50 euroa.
tili.nosta(70); // Nostettava määrä ylittää tilin saldon.
tili.talleta(-20); // Talletettava määrä on virheellinen.
