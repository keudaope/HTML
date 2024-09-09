/* P01. Tee ohjelma, joka tulostaa "Hei Maailma" */
console.log("P01");
console.log("Hei maailma");
console.log("-------------------------------------------");

/* P02. Tee ohjelma, joka laskee kaksi lukua yhteen ja tulostaa summan */
/* alustetaan muuttujat */
var luku1, luku2, summa;
console.log("P02");
luku1 = 5;
luku2 = 10;
summa = luku1 + luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " summa = "+summa);
console.log("-------------------------------------------");

/* P03. Tee ohjelma, joka laskee kahden luvun erotuksen ja tulostaa sen */
/* muuttujat on alustettu edellisessä tehtävässä */
luku1 = 10;
luku2 = 5;
console.log("P03");
var erotus = luku1 - luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " erotus = "+erotus);
console.log("-------------------------------------------");

/* P04. Tee ohjelma, joka laskee kahden luvun tulon ja tulostaa sen */
/* muuttujat on alustettu tehtävässä P2, paitsi tulo */
luku1 = 3;
luku2 = 2;
console.log("P04");
var tulo = luku1 * luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " tulo = "+ tulo)
console.log("-------------------------------------------");

/* P05. Tee ohjelma, joka laskee kahden luvun osamäärän ja tulostaa sen */
/* muuttujat on alustettu tehtävässä P2, paitsi osamaara */
luku1 = 6;
luku2 = 2;
console.log("P05");
var osamaara = luku1 / luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " osamaara = "+ osamaara)
console.log("-------------------------------------------");

/* P06. Tee ohjelma, joka muuntaa Celsius-asteet Fahrenheiteiksi */
var Celsius, Fahrenheit;
console.log("P06");
Celsius = 44;
Fahrenheit = Celsius * 9 / 5 + 32;
console.log(Celsius + " astetta Celsiusta on " + Fahrenheit + " astetta Fahrenheitia");
console.log("-------------------------------------------");

/* P07. Tee ohjelma, joka muuntaa Fahrenheit-asteet Celsiuksiksi */
/* muuttajat on alustettu edellisessä tehtävässä */
console.log("P07");
Fahrenheit = 44;
Celsius = (Fahrenheit - 32) * 5 / 9;
console.log(Fahrenheit + " astetta Fahrenheitia on " + Celsius + " astetta Celsiusta");
console.log("-------------------------------------------");

/* P08. Tee ohjelma, joka muuntaa mailit kilometreiksi */
console.log("P08");
var km, maili, muunnos = 1.609;
maili = 100;
km = muunnos * maili;
console.log(maili + " mailia on " + km +" kilometriä");
console.log("-------------------------------------------");

/* P09. Tee ohjelma, joka muuntaa kilometrit maileiksi */
console.log("P09");
var km, maili, muunnos = 1.609;
km = 100;
maili = km / muunnos;
console.log(km + " kilometriä on " + maili +" mailia");
console.log("-------------------------------------------");

/* P10. Tee ohjelma, joka muuntaa tuumat senteiksi */
console.log("P10");
var sentit, tuumat;
muunnos = 2.54;
tuumat = 5;
sentit = tuumat * muunnos;
console.log(tuumat + " tuumaa on " + sentit + " senttiä");
console.log("-------------------------------------------");

/* P11. Tee ohjelma, joka muuntaa sentit tuumiksi */
/* muuttujat on alustettu edellisessä tehtävässä */
console.log("P11");
sentit = 5;
tuumat = sentit / muunnos;
console.log(sentit + " senttiä on " + tuumat + " tuumaa");
console.log("-------------------------------------------");

/* P12. Tee ohjelma, joka muuntaa yardit metreiksi */
console.log("P12");
var yardit, metrit;
yardit = 10;
muunnos = 0.9144;
metrit = yardit * muunnos;
console.log(yardit + " yardia on " + metrit + " metriä");
console.log("-------------------------------------------");

/* P13. Tee ohjelma, joka muuntaa metrit yardeiksi * /
/* muuttujat on alustettu edellisessä tehtävässä */
console.log("P13");
metrit = 10;
yardit = metrit / muunnos;
console.log(metrit + " metriä on " + yardit + " yardia");
console.log("-------------------------------------------");

/* P14. Tee ohjelma, joka kysyy käyttäjältä Fahrenheit arvoa ja muuntaa sen Celsiuksiksi */
console.log("Katso tehtävä P06");
console.log("-------------------------------------------");

/* P15. Kirjoita laskutehtävät (2-5) uudestaan siten, että käyttäjä voi antaa molemmat arvot (a, b) */
console.log("P15");
function summafunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " summa on " + (a+b));
}
function erotusfunktio(a, b)
{
    console.log("Lukujen " + a + " ja " + b + " erotus on " + (a-b));
}
function tulofunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " tulo on " + a*b);
}
function osamaarafunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " osamaara on " + a/b);
}
summafunktio(6, 3);
erotusfunktio(6,3);
tulofunktio(6,3);
osamaarafunktio(6,3);
console.log("-------------------------------------------");

/* P17. Tee ohjelma, joka tulostaa annetun kirjaimen ASCII arvon (esim. A --> 65) */
console.log("P17");
function asciiksi(a)
{
    console.log(a + " kirjaimen asciikoodi on: " + a.charCodeAt())
}
asciiksi("A");
asciiksi("!");
asciiksi("ä");
console.log("-------------------------------------------");

/* P18. Laske ympyrän ala, kun käyttäjä antaa säteen (pituuden) */
console.log("P18");
var pii = 3.1415;
function ympyranAla(sade){
    console.log("Ympyrän pinta-ala on " + (sade * sade * pii) + " kun säde on: " + sade);
}
ympyranAla(2);
console.log("-------------------------------------------");
