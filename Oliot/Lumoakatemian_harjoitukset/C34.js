class Kohde {
  constructor(nimi, arvo) {
    this.nimi = nimi;
    this.arvo = arvo;
  }
}

class Rekisteri {
  constructor() {
    this.kohteet = [];
  }

  rekisteroiKohde(kohde) {
    this.kohteet.push(kohde);
    console.log(`Rekisteröity kohde: ${kohde.nimi}, arvo: ${kohde.arvo}`);
  }

  listaaKohteet() {
    console.log("Rekisteröidyt kohteet:");
    this.kohteet.forEach((kohde) =>
      console.log(`${kohde.nimi} - ${kohde.arvo}`)
    );
  }
}

const rekisteri = new Rekisteri();
const kohde1 = new Kohde("Talo", 250000);
const kohde2 = new Kohde("Auto", 20000);

rekisteri.rekisteroiKohde(kohde1);
rekisteri.rekisteroiKohde(kohde2);
rekisteri.listaaKohteet();
