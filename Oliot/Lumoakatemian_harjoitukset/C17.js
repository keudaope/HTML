class Elain {
  constructor(nimi) {
    this.nimi = nimi;
  }

  aani() {
    console.log("Eläin tekee äänen");
  }
}

class Kissa extends Elain {
  aani() {
    console.log("Kissa sanoo: Miau!");
  }
}

class Koira extends Elain {
  aani() {
    console.log("Koira sanoo: Hau!");
  }
}

const kissa = new Kissa("Misu");
kissa.aani();

const koira = new Koira("Rekku");
koira.aani();
