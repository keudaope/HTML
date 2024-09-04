/* Functiot 
Tehtävä 1 */
function tervehdi()
{
    console.log("Terve!");
}

tervehdi();
tervehdi();

/* Tehtävä 2 */
function tervehdi2(nimi)
{
    console.log("Terve, " + nimi + "!");
}

tervehdi2("Jyri");
tervehdi2("Eetu");

/* Tehtävä 3 */
function tervehdi3(nimi)
{
    if(!nimi)
    {
        console.log("Heippa!");
    }
    else
    {
        console.log("Terve, " + nimi + "!");
    }
}

tervehdi3();
tervehdi3("Mikko");

/* Tehtävä 4 ja 5 */
function muutaCelsiuksiksi(arvo)
{
    console.log((arvo - 32) * 5 / 9 + " Celsiusta");
}

function muutaFahrenheiteiksi(arvo)
{
    console.log((arvo * 9/5) + 32 + " Fahrenheitia");
}

muutaCelsiuksiksi(86);
muutaCelsiuksiksi(0);
muutaFahrenheiteiksi(25);
muutaFahrenheiteiksi(0);

/* Tehtävä 6 */
function muutaLampotila(asteet, yksikko)
{
    if(yksikko == "C")
    {
        console.log((asteet * 9/5) + 32 + " Fahrenheitia");
    }
    else if(yksikko == "F")
    {
        console.log((asteet - 32) * 5 / 9 + " Celsiusta");
    }
    else{
        console.log("Annoit sellaisen yksikön, jota en tunnista!")
    }
}

muutaLampotila(25, "C");
muutaLampotila(86, "F");

/* Tehtävä 7 */
function muutaPituus(pituus, mista, mihin)
{
    if(mista == "maili" && mihin == "km")
    {
        console.log(pituus + " mailia on " + pituus*1.609 + " kilometriä");
    }
    else if(mista == "km" && mihin == "maili")
    {
        console.log(pituus + " km on " + pituus/1.609 + " mailia");
    }
    else if(mista == mihin)
    {
        console.log(pituus + " " + mista + " on " +pituus + " " + mihin);
    }
    else{
        console.log("Annoit sellaisen muuttujan, jota en tunne.")
    }
}
muutaPituus(50, "maili", "km");
muutaPituus(32, "km", "maili");
muutaPituus(40, "km", "km");

/* Tehtävä 8 */
function muutaPituus(pituus, mista, mihin)
{
    if(mista == "maili" && mihin == "km")
    {
        console.log(pituus + " mailia on " + pituus*1.609 + " kilometriä");
    }
    else if(mista == "km" && mihin == "maili")
    {
        console.log(pituus + " km on " + pituus/1.609 + " mailia");
    }
    else if(mista == "maili" && mihin == "jalka")
    {
        console.log(pituus + " mailia on " + pituus*5280 + " jalkaa")
    }
    else if(mista == "jalka" && mihin == "maili")
    {
        console.log(pituus + " jalkaa on " +pituus / 5280 + " mailia")
    }
    else if(mista == "km" && mihin == "jalka")
    {
        console.log(pituus + " km on " + pituus * 3281 + " jalkaa")
    }
    else if(mista == "jalka" && mihin == "km")
    {
        console.log(pituus + " jalkaa on " + pituus / 3281 + " km")
    }
    else if(mista == mihin)
    {
        console.log(pituus + " " + mista + " on " +pituus + " " + mihin);
    }
    /* Tehtävä 9 osuus */
    if(mista != "jalka" && mista != "km" && mista !="maili")
    {
        console.log("Virheellinen yksikkö " + mista)
    }
    else if(mihin != "jalka" && mihin != "km" && mihin !="maili")
    {
        console.log("Virheellinen yksikkö " + mihin)
    }
}

muutaPituus(5, 'maili', 'km');
muutaPituus(5, 'maili', 'jalka');
muutaPituus(5, 'km', 'jalka');
muutaPituus(5, 'kasi', 'maili');
muutaPituus(5, "km", "polvi");