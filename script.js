function aktualizovatCas() {
    var datum = new Date();
    var hodiny = datum.getHours().toString().padStart(2, "0");
    var minuty = datum.getMinutes().toString().padStart(2, "0");
    var sekundy = datum.getSeconds().toString().padStart(2, "0");
    document.getElementById("hodiny").innerHTML = 
        hodiny + ":" + minuty + ":" + sekundy;
}
setInterval(aktualizovatCas, 1000);
aktualizovatCas();
function start() {
    startTime = new Date().getTime();
    interval = setInterval(function() {
        elapsedTime = new Date().getTime() - startTime;
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((elapsedTime % (1000 * 60)) % 1000);
        document.getElementById("cas").innerHTML = 
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
    }, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
var startTime;
var elapsedTime = 0;
var interval;
function start() {
    startTime = new Date().getTime();
    interval = setInterval(function() {
        elapsedTime = new Date().getTime() - startTime;
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((elapsedTime % (1000 * 60)) % 1000);
        document.getElementById("cas").innerHTML = 
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
        if (elapsedTime >= limit * 60 * 1000) {
            clearInterval(interval);
            document.getElementById("start").disabled = true;
            document.getElementById("stop").disabled = true;
            alert("Dosáhli jste svého denního limitu pro " + document.getElementById("aktivita").value + "!");
        }
    }, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stop() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

limit = document.getElementById("limit").value;
var startTime;
var elapsedTime = 0;
var interval;
var limit;
function start() {
    startTime = new Date().getTime();
    interval = setInterval(function() {
        elapsedTime = new Date().getTime() - startTime;
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((elapsedTime % (1000 * 60)) % 1000);
        document.getElementById("cas").innerHTML = 
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
    }, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stop() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    var datum = new Date();
    var polozka = {
        sit: document.getElementById("sit").value,
        cas: elapsedTime
    };
    historie.push(polozka);
    zobrazitHistorii();
}

function zobrazitHistorii() {
    var html = "";
    for (var i = 0; i < historie.length; i++) {
        var polozka = historie[i];
        var datum = new Date(polozka.cas);
        var casStr = Math.floor(polozka.cas / (1000 * 60)) + " minut";
        html += "<li>" + datum.toLocaleDateString() + " - " + polozka.sit + " (" + casStr + ")</li>";
    }
    document.getElementById("historie").innerHTML = html;
}
var startTime;
var elapsedTime = 0;
var interval;
var historie = [];

function start() {
    startTime = new Date().getTime();
    interval = setInterval(function() {
        elapsedTime = new Date().getTime() - startTime;
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((elapsedTime % (1000 * 60)) % 1000);
        document.getElementById("cas").innerHTML = 
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
        if (elapsedTime >= limit * 60 * 1000) {
            clearInterval(interval);
            document.getElementById("start").disabled = true;
            document.getElementById("stop").disabled = true;
            document.getElementById("zprava").innerHTML = "Dosáhli jste svého denního limitu! Doporučujeme si dát pauzu a odpočinout si od sítě " + document.getElementById("sit").value + ".";
        }
    }, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stop() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    var datum = new Date();
    var polozka = {
        sit: document.getElementById("sit").value,
        cas: elapsedTime
    };
    historie.push(polozka);
    zobrazitHistorii();
    if (elapsedTime < limit * 60 * 1000) {
        document.getElementById("zprava").innerHTML = "Dobrá práce! Strávili jste na síti " + document.getElementById("sit").value + " jen " + Math.floor(elapsedTime / (1000 * 60)) + " minut.";
    }
}

function zobrazitHistorii() {
    var html = "";
    for (var i = 0; i < historie.length; i++) {
        var polozka = historie[i];
        var datum = new Date(polozka.cas);
        var casStr = Math.floor(polozka.cas / (1000 * 60)) + " minut";
        html += "<li>" + datum.toLocaleDateString() + " - " + polozka.sit + " (" + casStr + ")</li>";
    }
    document.getElementById("")
}