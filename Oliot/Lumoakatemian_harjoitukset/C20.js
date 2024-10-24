class Elektroniikka {
  kaynnista() {
    console.log("Elektroniikka käynnistyy");
  }

  sammuta() {
    console.log("Elektroniikka sammuu");
  }
}

class Tietokone extends Elektroniikka {
  kaynnista() {
    console.log("Tietokone käynnistyy Windowsiin");
  }
}

class Puhelin extends Elektroniikka {
  kaynnista() {
    console.log("Puhelin käynnistyy Androidiin");
  }
}

const tietokone = new Tietokone();
tietokone.kaynnista();

const puhelin = new Puhelin();
puhelin.kaynnista();
