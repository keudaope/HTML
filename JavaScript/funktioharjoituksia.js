/* Tehtävä01 */
function laskeSumma(l1, l2)
{
    return l1+l2
}
console.log(laskeSumma(3,5));

/* Tehtävä 2 */
function laskeNelionPintaAla(sivu)
{
    return sivu * sivu;
}
console.log(laskeNelionPintaAla(5));

/* Tehtävä 3 */
function laskeYmpyranPintaAla(sade)
{
    return 2 * sade * 3.1415;
}
console.log(laskeYmpyranPintaAla(2));

/* Tehtävä 4 */
function laskeKeskiarvo(taulukko)
{
    var summa = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        summa+= taulukko[i];
    }
    return summa / taulukko.length;
}
console.log(laskeKeskiarvo([1, 2, 3, 4, 5]));

/* Tehtävä 5 */
function onkoParillinen(luku)
{
    if(luku % 2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(onkoParillinen(3));
console.log(onkoParillinen(4));

/* Tehtävä 6 */
function laskeMerkkijononPituus(merkkijono)
{
    return merkkijono.length;
}

/* Tehtävä 7 */
function onkoMerkkijonoTyhja(merkkijono)
{
    if(!merkkijono)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(onkoMerkkijonoTyhja(""));
console.log(onkoMerkkijonoTyhja("on"));

/* Tehtävä 8 */
function laskeSuurin(taulukko)
{
    var suurin = taulukko[0];
    for(i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] > suurin)
        {
            suurin = taulukko[i];
        }
    }
    return suurin;
}
console.log(laskeSuurin([2, 7, 1, 9, 3]));

/* tehtävä 9 */
function laskePienin(taulukko)
{
    var pienin = taulukko[0];
    for(i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] < pienin)
        {
            pienin = taulukko[i];
        }
    }
    return pienin;
}
console.log(laskePienin([2, 7, 1, 9, 3]));

/* Tehtävä 10 */
function laskeTaulukonSumma(taulukko)
{
    var summa = 0;
    for(i = 0; i < taulukko.length; i++)
    {
        summa += taulukko[i];
    }
    return summa;
}
console.log(laskeTaulukonSumma([1, 2, 3, 4, 5]));

/* Tehtävä 11 */
function laskePotenssi(luku, potenssi)
{
    var korotettu = 1;
    for(i = 0; i < potenssi; i++)
    {
        korotettu *= luku;
    }
    return korotettu;
}
console.log(laskePotenssi(3,3));

/* Tehtävä 12 */
function onkoAlkuluku(luku){
    if (luku <= 1) return false;
    if (luku <= 3) return true;
    if (luku % 2 === 0 || luku % 3 === 0) return false;
    let i = 5;
    while (i * i <= luku) {
        if (luku % i === 0 || luku % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
console.log(onkoAlkuluku(25));

/* Tehtävä 13 */
function kaannaMerkkijono(merkkijono){
    var kaannetty = "";
    for(i = merkkijono.length -1; 0 <= i; i--)
    {
        kaannetty += merkkijono[i];
    }
    return kaannetty;
}
console.log(kaannaMerkkijono("Merkkijono"));

/* Tehtävä 14 */
function onkoPalidromi(merkkijono)
{
    var kaannetty = "";
    for(i = merkkijono.length -1; 0 <= i; i--)
    {
        kaannetty += merkkijono[i];
    }
    return kaannetty == merkkijono
}
console.log(onkoPalidromi("innostunutsonni"))

/* Tehtävä 15 */
function onkoAnagrammi(merkkijono1, merkkijono2)
{
    var jar1 = merkkijono1.split('').sort().join("");
    var jar2 = merkkijono2.split('').sort().join("");
    
    return jar1 == jar2;
}
console.log(onkoAnagrammi("palidromi", "diorpalmi"));

/* Tehtävä 16 */
function laskeTaulukonKeskiarvo(taulukko)
{
    var summa = 0, keskiarvo;
    for(i = 0; i < taulukko.length;i++)
    {
        summa += taulukko[i];
    }
    return summa / taulukko.length;
}
console.log(laskeTaulukonKeskiarvo([2, 4, 6, 8, 10, 12]));

/* Tehtävä 17 */
function onkoKarkausvuosi(vuosi)
{
    if(vuosi % 400 == 0)
    {
        console.log("Vuosi on karkausvuosi");
    }
    else if(vuosi % 4 == 0 && vuosi % 100 != 0)
    {
        console.log("Vuosi on karkausvuosi")
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}
onkoKarkausvuosi(2000);
onkoKarkausvuosi(1900);
onkoKarkausvuosi(1996);
onkoKarkausvuosi(1997);

function onkoTaulukkoJarjestetty(taulukko)
{
    for(i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] > taulukko[i+1])
        {
            return false;
        }
    }
    return true;
}
console.log(onkoTaulukkoJarjestetty([1, 2, 3, 4, 5]))

/* Tehtävä 19 */
function muutaEkaKirjainIsoksi(merkkijono) {
    return merkkijono.charAt(0).toUpperCase() + merkkijono.slice(1);
    }
console.log(muutaEkaKirjainIsoksi("terve"))

/* Tehtävä 20 */
function laskeFibonacci(n)
{
    if(n<=0) return 0;
    if(n ===1) return 1;
    let a = 0; b = 1;
    for(i = 2; i <= n; i++)
    {
        const temp = a+b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(laskeFibonacci(15));