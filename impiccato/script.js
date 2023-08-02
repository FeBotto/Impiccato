var parole = [
    "CASA",
    "ELEFANTE",
    "RINOCERONTE",
    "GRATTACIELO",
    "MINIERA",
    "FORTNITE",
    "SUS",
    "DEMI",
    "BARCHI",
    "SARDEGNA",
    "CALABRIA",
    "CAVALLO",
    "ELASTICO",
    "LUCE",
    "CIECO",
    "NUMERO",
    "PROFESSORE",
    "TASTIERA",
    "LED",
    "CIABATTA"
];

var indice = 0;
var lool = [];
var parolaScelta = "";
var cont = 0;
var immagine = 2;
var vittoria = 0;

function carica(){
    indice = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
    console.log(indice);
    for(let i in parole[indice]){
        lool[i] = "*";
        document.getElementById("parola2").innerText += lool[i];
    }
    parolaScelta = parole[indice].toUpperCase();
}

function controlla(lettera){
    cont = 0;
    vittoria = 0;
    for(let i=0; i<parolaScelta.length; i++){
        console.log(parolaScelta)
        if(parolaScelta[i] === lettera){
            lool[i] = lettera;
            document.getElementById("parola2").innerText = lool;
            cont++;
        }
    }
    for(let i in lool){
        if(lool[i] == parolaScelta[i]){
            vittoria++;
        }
        if(vittoria == parolaScelta.length){
            alert("HAI VINTO ♥");
        }
    }

    if(cont == 0){
        document.getElementById("stecchino").style.backgroundImage = "url('./img/img"+ immagine +".png')";
        immagine++;
    }
    if(immagine == 8){
        alert("HAI PERSO! La parola era: " + parolaScelta);
        xd();
    }
}

function xd(){
    window.location.reload();
}