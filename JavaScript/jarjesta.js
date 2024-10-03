function jarjesta()
{
    let taulukko = [];
    taulukko[0] = document.getElementById("eka").value;
    taulukko[1] = document.getElementById("toka").value;
    taulukko[2]= document.getElementById("kolme").value;
    document.getElementById("vastaus1").innerHTML = "Annoit luvut " +taulukko[0] + " " + taulukko[1] + " " + taulukko[2];
    taulukko.sort(function(a, b){return a-b});
    document.getElementById("vastaus2").innerHTML = "Luvut järjestyksessä: "+taulukko[0] + " " + taulukko[1] + " " + taulukko[2];
    event.preventDefault();
}