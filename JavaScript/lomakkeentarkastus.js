function tarkasta()
{
    let etunimi = document.getElementById("enimi").value;
    let sukunimi = document.getElementById("snimi").value;
    let osoite = document.getElementById("osoite").value;
    let pnro = document.getElementById("pnro").value;
    let ptp = document.getElementById("ptp").value;
    let puhelin = document.getElementById("puhelin").value;

    if(etunimi.trim() == "")
    {
        alert("Annapa etunimi!");
    }
    else if(sukunimi.trim() == "")
    {
        alert("Annapa sukunimi!");
    }
    else if(osoite.trim() == "")
    {
        alert("Annapa lähiosoite");
    }
    else if(pnro.trim() == "")
    {
        alert("Annapa postinumero!");
    }
    else if(ptp.trim() == "")
    {
        alert("Annapa postitoimipaikka!");
    }
    else if(puhelin.trim() == "")
    {
        alert("Annapa puhelin");
    }
    else{
        alert(`Olet ${etunimi} ${sukunimi} \nAsut ${osoite} ${pnro} ${ptp} - osoitteessa \nja puhelinnumerosi on: ${puhelin}`);
    }
    e.preventDefault();
}