function numerot(nro) {
    switch (nro) {
        case 1:
            console.log("Valitsit numeron 1");
            break;
        case 2:
            console.log("Valitsit numeron 2");
            break;
        case 3:
            console.log("Valitsit numeron 3");
            break;
        default:
            console.log("Valitsit jonkin muun numeron");
            break;
    }
}
function kortit(kortti) {
    switch (kortti) {
        case "J":
        case "j":
            console.log("Valitsit jätkän");
            break;
        case "Q":
        case "q":
            console.log("Valitsit akan");
            break;
        case "K":
        case "k":
            console.log("Valitsit kurkon");
            break;
        case "A":
        case "a":
            console.log("Valitsit ässän");
            break;
        default:
            console.log("et valinnut kuvakorttia");
            break;
    }
}
function huutopussi(kortti) {
    if (typeof kortti === 'string' || kortti instanceof String)
    {
        kortti = kortti.toUpperCase();
        //console.log(kortti);
    }  
    var pisteet = 0;
    switch (kortti) {
        case "J":
        case "Q":
        case "K":
            pisteet += 5;
            break;
        case "A":
        case 10:
            pisteet += 10;
            break;
    }
    console.log(pisteet);
}
function Henkilo(etunimi, sukunimi, ika) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.ika = ika;
    //this.tiedot = NaytaTiedot;
}
/*function NaytaTiedot() {
    var en = this.etunimi;
    var sn = this.sukunimi;
    var i = this.ika;
    console.log("Henkilön nimi on " + en + " " + sn + " ja ikä on " + i);
}
var names = ["Jyri", "Sirpa", "Lumo", "Usva"];
names.sort();*/
//numerot(2);
//kortit("a");
//huutopussi("k");
//console.log(names);
var Hannu = new Henkilo("Hannu", "Hanhi", 39);
var Heikki = new Henkilo("Heikki", "Hilli", 70);
var Saija = new Henkilo("Saija", "Paasanen", 14);
//console.log(Heikki.sukunimi);
Heikki = { ...Heikki, osoite:"Kukkakaalikatu 1", postinro:"01300", puhelin:"0401112233" };
console.log(Heikki);