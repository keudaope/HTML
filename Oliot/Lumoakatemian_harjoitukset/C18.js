class Ajoneuvo {
  kaynnista() {
    console.log("Ajoneuvo käynnistyy");
  }

  pysayta() {
    console.log("Ajoneuvo pysähtyy");
  }
}

class Auto extends Ajoneuvo {
  kaynnista() {
    console.log("Auto käynnistyy hiljaisesti");
  }
}

class Polkupyora extends Ajoneuvo {
  kaynnista() {
    console.log("Polkupyörä ei tarvitse käynnistystä");
  }
}

const auto = new Auto();
auto.kaynnista();

const pyora = new Polkupyora();
pyora.kaynnista();
