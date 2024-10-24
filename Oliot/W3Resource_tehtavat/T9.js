class Pankki {
  constructor() {
    this.nimi = "";
    this.konttorit = [];
  }
  lisaaKonttori(konttori) {
    this.konttorit.push(konttori);
    console.log(`Konttori ${konttori} lisättiin onnistuneesti`);
  }
  poistaKonttori(konttori) {
    var index = this.konttorit.indexOf(konttori);
    if (index !== -1) {
      this.konttorit.splice(index, 1);
      console.log(`Konttori ${konttori} poistettiin onnistuneesti`);
    }
  }
  naytaKonttorit() {
    if (this.konttorit.length == 0) {
      console.log("Konttoreita ei saatavilla");
    } else {
      console.log("Konttorilista");
      this.konttorit.forEach((konttori, index) => {
        {
          console.log(`${index + 1}. ${konttori}`);
        }
      });
    }
  }
}
var nordea = new Pankki();
nordea.lisaaKonttori("Kaivopiha");
nordea.lisaaKonttori("Pitäjänmäki");
nordea.naytaKonttorit();
nordea.poistaKonttori("Pitäjänmäki");
nordea.naytaKonttorit();
