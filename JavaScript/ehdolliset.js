/* Ehdolliset laskutoimitukset
Tehtävät 1 ja 2 ja 3*/
var tunti = 9;
var nimi = "Jyri";
if(tunti >= 6 && tunti <=12)
{
    console.log("Hyvää huomenta, " + nimi+"!");
}
else if(tunti >= 13 && tunti <= 17)
{
    console.log("Hyvää iltapäivää!");
}
else {
    console.log("Hyvää yötä!")
}
/* Tehtävä 4 ja 5 */
var ika = 1;
var onLoma = false;
if(ika < 6 && !onLoma || ika > 65 && !onLoma)
{
    console.log("Alennus");
}
else{
    console.log("Ei alennusta!");
}
/* Tehtävä 6 */
var numero = Math.random();
var muuttuja = "";
arvaus = "klaava";
if(numero < 0.5)
{
    // console.log("klaava");
    muuttuja = "klaava";
}
else{
    // console.log("kruuna");
    muuttuja = "kruuna"
}
if(muuttuja == arvaus)
{
    console.log("Voitit")
}
else{
    console.log("Hävisit")
}

/* Tehtävä 6 f */
numero = Math.random();
muuttuja = numero < 0.5 ? "kruuna" : "klaava";
arvaus = "klaava";
vastaus = muuttuja == arvaus ? "Voitit" : "Hävisit";
console.log(vastaus);