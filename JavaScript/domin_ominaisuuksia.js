event.preventDefault()
function vaihda()
{
    document.getElementById("eka").innerHTML = "vaihdettu teksti";
    event.preventDefault()
}
function muutaPainiketta()
{
    const button = document.getElementById("painike");
    button.setAttribute("name", "helloButton");
    button.setAttribute("disabled", "");
}
function muutaCSS()
{
    document.getElementById("painike2").style.backgroundColor="red";
    document.getElementById("painike2").style.color = "Yellow";
    event.preventDefault();
}
function poista()
{
    const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id
event.preventDefault();
}
function lisaa()
{
    var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:50%;height:10%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(elemDiv);
event.preventDefault();
}
