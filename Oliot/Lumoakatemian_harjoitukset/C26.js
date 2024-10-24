class Robotti {
  constructor(nimi) {
    this.nimi = nimi;
    this.tehtavat = [];
  }

  lisaaTehtava(tehtava) {
    this.tehtavat.push(tehtava);
    console.log(`${this.nimi} lisää tehtävän: ${tehtava}`);
  }

  suoritaTehtava() {
    if (this.tehtavat.length > 0) {
      const tehtava = this.tehtavat.shift();
      console.log(`${this.nimi} suorittaa tehtävän: ${tehtava}`);
    } else {
      console.log(`${this.nimi}: Ei tehtäviä suoritettavana.`);
    }
  }
}

const robotti = new Robotti("Robo");
robotti.lisaaTehtava("Imuroi");
robotti.lisaaTehtava("Tiskaa");
robotti.suoritaTehtava();
robotti.suoritaTehtava();
robotti.suoritaTehtava();
