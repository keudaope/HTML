class Muoto {
  laskeAla() {
    throw new Error("Metodi 'laskeAla' pitää ylikirjoittaa aliluokissa");
  }
}
class Ympyra extends Muoto {
  constructor(sade) {
    super();
    this.sade = sade;
  }
  laskeAla() {
    return this.sade * this.sade * Math.PI;
  }
}

class Suorakaide extends Muoto {
  constructor(leveys, korkeus) {
    super();
    this.leveys = leveys;
    this.korkeys = korkeus;
  }
  laskeAla() {
    return this.leveys * this.korkeys;
  }
}

var ympyra = new Ympyra(7);
var ympyranAla = ympyra.laskeAla();
console.log(ympyranAla);

var suorakaide = new Suorakaide(8, 9);
var suorakaideAla = suorakaide.laskeAla();
console.log(suorakaideAla);
