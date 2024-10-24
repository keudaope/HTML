class Elain {
  constructor(nimi, ika) {
    this.nimi = nimi;
    this.ika = ika;
  }

  aani() {
    console.log("Eläin tekee äänen");
  }
}

const koira = new Elain("Max", 5);
koira.aani();
