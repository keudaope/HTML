class Henkilo {
  constructor(etunimi, sukunimi, ika) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.ika = ika;
  }
}

// Luodaan Risto-olio
const risto = new Henkilo("Risto", "Reipas", 10);

// Tulostetaan Riston tiedot konsoliin
console.log("Etunimi:", risto.etunimi);
console.log("Sukunimi:", risto.sukunimi);
console.log("Ikä:", risto.ika);
