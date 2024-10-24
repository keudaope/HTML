class Yliopisto {
  constructor() {
    this.nimi = "";
    this.osastot = [];
  }
  lisaaOsasto(osasto) {
    this.osastot.push(osasto);
    console.log(`Osasto ${osasto} lisättiin onnistuneesti`);
  }
  poistaOsasto(osasto) {
    var index = this.osastot.indexOf(osasto);
    if (index !== -1) {
      this.osastot.splice(index, 1);
      console.log(`Osasto ${osasto} poistettiin onnistuneesti`);
    }
  }
  naytaOsastot() {
    if (this.osastot.length == 0) {
      console.log("Osastoja ei ole");
    } else {
      console.log("Osastolistaus:");
      this.osastot.forEach((osasto, index) => {
        {
          console.log(`${index + 1}. ${osasto}`);
        }
      });
    }
  }
}

var helsinki = new Yliopisto();
helsinki.nimi = "Helsingin yliopisto";
helsinki.lisaaOsasto("Matemaattis-luonnontiede");
helsinki.lisaaOsasto("Kasvatustiede");
helsinki.lisaaOsasto("Aikuiskasvatustiede");
//console.log(helsinki);
helsinki.naytaOsastot();
helsinki.poistaOsasto("Kasvatustiede");
helsinki.naytaOsastot();
