/* Taulukot ja silmukat
Tehtävä 1 */
const nums = [10, 20, 30];
nums[nums.length-1] = 99;
console.log(nums)

/* Tehtävä 2 */
function haeViimeinenArvo(taulukko)
{
    let viimeinen = taulukko[taulukko.length-1];
    console.log(viimeinen);
}
haeViimeinenArvo([1, 20, 22, 24, 5]);
haeViimeinenArvo(["Hei", "Heippa", "Hyvää"]);

/* Tehtävä 3 */

function vaihdaTaulukko(taulukko)
{
    let temp = taulukko[taulukko.length-1];
    taulukko[taulukko.length-1] = taulukko[0];
    taulukko[0] = temp;
    console.log(taulukko);
}

vaihdaTaulukko([1, 20, 22, 24, 5]);
vaihdaTaulukko(["Hei", "Heippa", "Hyvää"]);

/* Tehtävä 4 */
    for(var i = 0; i <=10; i=i+2)
    {
        console.log(i);
    }

/* Tehtävä 5 */
for(var i = 5; i >= 0; i--)
{
    console.log(i);
}

/* Tehtävä 6 */
var i = 0;
while(i <= 10)
{
    console.log(i);
    i+=2;
}
i = 5;
while(i >= 0)
{
    console.log(i);
    i--;
}

/* Tehtävä 7 */
function lisaa(taulukko)
{
    for(var i = 0; i < taulukko.length; i++)
    {
        taulukko[i] = taulukko[i]+1;
    }
    console.log(taulukko)
}
lisaa([1, 2, 3]);
lisaa([-2, -1, 0, 99]);

/* Tehtävä 8 */
function lisaaNumero(taulukko, lisays)
{
    for(var i = 0; i < taulukko.length; i++)
    {
        taulukko[i] = taulukko[i]+lisays;
    }
    console.log(taulukko)
}
lisaaNumero([1, 2, 3], 2);
lisaaNumero([1, 2, 3], 3);
lisaaNumero([-2, -1, 0, 99], 2);

/* Tehtävä 9 */
function laskeYhteenTaulukot(taulukko1, taulukko2)
{
    var uusiTaulukko = [];
    for(var i = 0; i < taulukko1.length; i++)
    {
        uusiTaulukko.push(taulukko1[i] + taulukko2[i]);
    }
    console.log(uusiTaulukko)
}
laskeYhteenTaulukot([1, 1, 2], [1, 1, 3]);
laskeYhteenTaulukot([1, 2, 3], [4, 5, 6]);

/* Tehtävä 10 */
function laskePositiiviset(taulukko)
{
    laskuri = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] >= 0)
        {laskuri++}
    }
    console.log("Taulukossa positiivisia numeroita: " + laskuri);
}
laskePositiiviset([1, -3, 5]);
laskePositiiviset([-2, 3, -5, 7, 10]);

/* Tehtävä 11 ja 12*/
function minMax(taulukko)
{
    var objekti = {min: 0, max:0};
    min = taulukko[0];
    max = taulukko[0];
    if(taulukko.length == 0)
    {
        min = null;
        max = null;
    }
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] < min)
        {
            min = taulukko[i];
        }
        if(taulukko[i] > max)
        {
            max = taulukko[i];
        }
    }
    objekti.min = min;
    objekti.max = max;
    console.log(objekti);
}
minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([3]);
minMax([]);

/* Tehtävä 13 */
function laskeSanat(sanat)
{
    const vastaus = {};

    for (let i = 0; i < sanat.length; i++) {
      const sana = sanat[i];

      if (!vastaus[sana]) {
        vastaus[sana] = 1;
      } else {
        vastaus[sana]++;
      }
    }

    return vastaus;
}

console.log(laskeSanat(['omena', 'appelsiini', 'omena', 'omena']))

/* Tehtävä 14 ja 15 */
function loydaSana(taulukko)
{
    var indeksi = -1;
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] =='omena')
        {
            indeksi = i;
            /* Tehtävä 15 lisäys */
            i = taulukko.length-1;
        }
    }
    console.log(indeksi);
}

loydaSana(['appelsiini', 'päärynä', 'omena', 'viinirypäle', 'omena']);

/* Tehtävä 16 */
function etsiIndeksi(taulukko, sana)
{
    var indeksi = -1;
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] == sana)
        {
            indeksi = i;
            i = taulukko.length-1;
        }
    }
    console.log("indeksi: " + indeksi);
}
etsiIndeksi(['appelsiini', 'päärynä', 'omena', 'viinirypäle', 'omena'], 'päärynä');

/* Tehtävä 17 */
function poistaLeipa(taulukko)
{
    poistetutLeivat = 0;
    var uusiTaulukko = [];
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] == 'leipa' && poistetutLeivat < 2)
        {
            poistetutLeivat++;
            continue;
        }
        uusiTaulukko.push(taulukko[i]);
    }
    console.log(uusiTaulukko);
}
poistaLeipa(['leipa', 'juusto', 'leipa', 'leipa', 'voi', 'kinkku'])

/* Tehtävä 18 */
function fizzBuzz()
{
    for(var i = 0; i < 100; i++)
    {
        if(i % 15 === 0)
        {
            console.log('FizzBuzz')
        }
        else if(i % 5 === 0)
        {
            console.log('Buzz');
        }
        else if(i % 3 === 0)
        {
            console.log('Fizz')
        }
        else{
            console.log(i)
        }
    }
}
fizzBuzz();