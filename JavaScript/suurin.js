function suurin()
{
    let tau = [];
    tau[0] = document.getElementById("yksi").value;
    tau[1] = document.getElementById("kaksi").value;
    tau[2] = document.getElementById("kolme").value;
    tau[3] = document.getElementById("nelja").value;
    tau[4] = document.getElementById("viisi").value;
    document.getElementById("v1").innerHTML = "Annoit luvut: "+tau;
    tau.sort();
    document.getElementById("v2").innerHTML = "Suurin niistä on: " + tau[tau.length-1];
    event.preventDefault();

}