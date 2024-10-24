/* Tehtävä 1 */
var kauppalista = [];
kauppalista.push('maito', 'leipa', 'omenat');
console.log(kauppalista)

/* Tehtävä 2 */
var nimet = ['Emma', 'Johanna', 'Jonne', 'Lasse', 'Miina'];
console.log(nimet);

/* Tehtävä 3 */
var taulukko = [1, 2, 3, 4, 5];
console.log("Taulukon pituus on " + taulukko.length);

/* Tehtävä 4 */
taulukko = ['Matti', 'Anna', 'Eeva'];
taulukko.push('Juuso');
console.log(taulukko);

/* Tehtävä 5 */
var taul1 = [1, 2, 3];
var taul2 = [4, 5, 6];
var yhdistetty = [...taul1, ...taul2];
console.log(yhdistetty);

/* Tehtävä 6 */
taulukko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var parilliset = taulukko.filter(numero => numero % 2 ===0)
console.log(parilliset)

/* Tehtävä 7 */
taulukko = [5, 2, 9, 1, 8, 3];
taulukko = taulukko.sort();
console.log(taulukko);

/* Tehtävä 8 */
taulukko = [1, 2, 3, 4, 5];
taulukko = taulukko.reverse();
console.log(taulukko);

/* Tehtävä 9 */
taulukko = ['Matti', 'Anna', 'Eeva'];
taulukko = taulukko.join(", ");
console.log(taulukko);

/* Tehtävä 10 */
taulukko = [1, 2, 3, 4, 5];
const index = 3;
let indeksi = taulukko.indexOf(index);
taulukko.splice(indeksi, 1);
console.log(taulukko);

/* Tehtävä 11 */
taulukko = ['Matti', 'Anna', 'Eeva'];
const etsittava = "Eeva";
indeksi = taulukko.indexOf(etsittava);
if(indeksi !== -1)
{
    console.log("Nimi " + etsittava + " löytyy indeksistä " + indeksi);
}
else{
    console.log("Nimeä " + etsittava + " ei löydy taulukosta");
}
/* Tehtävä 12 */
taulukko = [1, 2, 3, 4, 5];
var uusitaulukko = [taulukko[taulukko.length-2], taulukko[taulukko.length-1]];
console.log(uusitaulukko);

/* Tehtävä 13 */
taulukko = [1, 2, 3, 4, 5];
taulukko[2] = 6;
console.log(taulukko)

/* Tehtävä 14 */
taulukko = [1, 2, 3, 4, 5];
var summa = 0;
for(var i = 0; i < taulukko.length; i++)
{
    summa += taulukko[i];
}
console.log(summa);

/* Tehtävä 15 */
taulukko = [1, 2, 3, 4, 5];
var summa = 0, keskiarvo;
for(var i = 0; i < taulukko.length; i++)
{
    summa += taulukko[i];
}
keskiarvo = summa / taulukko.length;
console.log(keskiarvo);

/* Tehtävä 16 */
taulukko = [1, 2, 3];
uusitaulukko = [...taulukko, ...taulukko, ...taulukko];
console.log(uusitaulukko)

/* Tehtävä 17 */
taulukko = [1, 2, 2, 3, 4, 4, 5];
uusitaulukko = [...new Set(taulukko)]
console.log(uusitaulukko)

/* Tehtävä 18 */
taulukko = [1, 2, 3, 4, 5];
var temp = taulukko[0];
taulukko[0] = taulukko[taulukko.length -1]
taulukko[taulukko.length-1] = temp;
console.log(taulukko);

/* Tehtävä 19 */
taulukko = ['Matti', 'Anna', 'Eeva'];
for (i = 0; i < taulukko.length; ++i)
{
    taulukko[i] = taulukko[i].toUpperCase();
}
console.log(taulukko);

/* Tehtävä 20 */
taulukko = [1, 2, 3, 4, 5];
uusitaulukko = [];
taulukko = taulukko.filter(numero => numero > 3)
console.log(taulukko)