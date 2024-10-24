// Eläinluokka
class Elain {
  constructor(nimi) {
    this.nimi = nimi;
  }

  aanesta() {
    console.log(`${this.nimi} tekee ääntä.`);
  }
}

// Koira-luokka perii Elain-luokan ominaisuudet ja metodit
class Koira extends Elain {
  aanesta() {
    console.log(`${this.nimi} haukkuu: Woof woof!`);
  }
}

// Lintu-luokka perii Elain-luokan ominaisuudet ja metodit
class Lintu extends Elain {
  aanesta() {
    console.log(`${this.nimi} laulaa: La la la!`);
  }
}

// Kala-luokka perii Elain-luokan ominaisuudet ja metodit
class Kala extends Elain {
  aanesta() {
    console.log(`${this.nimi} kuplii vedessä.`);
  }
}

// Luodaan erilaisia eläinolioita ja kutsutaan niiden "aanesta" -metodeja
const fido = new Koira("Fido");
const tweety = new Lintu("Tweety");
const nemo = new Kala("Nemo");

fido.aanesta(); // Fido haukkuu: Woof woof!
tweety.aanesta(); // Tweety laulaa: La la la!
nemo.aanesta(); // Nemo kuplii vedessä.
