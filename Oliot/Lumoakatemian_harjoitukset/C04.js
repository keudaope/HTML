class Kuvakirja {
  // Yksityinen muuttuja
  #SivujenLukumaara;

  // Konstruktori, jolla voi antaa itse sivumäärän
  constructor(sivumaara = 16) {
    this.#SivujenLukumaara = sivumaara;
  }

  // Metodi sivumäärän hakemiseksi
  HaeSivumaara() {
    return this.#SivujenLukumaara;
  }
}

// Luodaan Kuvakirja-olio käyttäen oletuskonstruktoria
const kuvakirjaOletus = new Kuvakirja();
console.log("Oletussivumäärä: " + kuvakirjaOletus.HaeSivumaara());

// Luodaan Kuvakirja-olio antamalla itse sivumääräksi 24
const kuvakirjaMukautettu = new Kuvakirja(24);
console.log("Mukautettu sivumäärä: " + kuvakirjaMukautettu.HaeSivumaara());
