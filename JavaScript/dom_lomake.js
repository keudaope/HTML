function tervehdi()
{
    let etunimi = document.getElementById("enimi").value;
    let sukunimi = document.getElementById("snimi").value;
    document.getElementById("vastaus").innerHTML = 
    "Hei " + etunimi + " " + sukunimi+"!";
    event.preventDefault();
}