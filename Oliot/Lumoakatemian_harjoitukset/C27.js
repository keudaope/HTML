class Muoto {
  pintaAla() {
    return 0;
  }
}

class Nelio extends Muoto {
  constructor(sivu) {
    super();
    this.sivu = sivu;
  }

  pintaAla() {
    return this.sivu * this.sivu;
  }
}

class Suorakulmio extends Muoto {
  constructor(leveys, korkeus) {
    super();
    this.leveys = leveys;
    this.korkeus = korkeus;
  }

  pintaAla() {
    return this.leveys * this.korkeus;
  }
}

class Kolmio extends Muoto {
  constructor(kanta, korkeus) {
    super();
    this.kanta = kanta;
    this.korkeus = korkeus;
  }

  pintaAla() {
    return (this.kanta * this.korkeus) / 2;
  }
}

const nelio = new Nelio(4);
console.log(nelio.pintaAla());

const suorakulmio = new Suorakulmio(4, 6);
console.log(suorakulmio.pintaAla());

const kolmio = new Kolmio(5, 7);
console.log(kolmio.pintaAla());
