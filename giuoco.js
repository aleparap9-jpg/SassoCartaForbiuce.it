alert("Tranquillo se vedi tutto bianco. sta caricando! Quando avrai inserito il tuo nome, comparirà  tutto! Premi OK");
var nomeGiocatore = window.prompt("Sono ancora io: come ti chiami?");
let lunghezzaNome = (nomeGiocatore.length);
let lunghezzaDiv = (lunghezzaNome * 6 + 300);
console.log(lunghezzaDiv);
document.getElementById("div123").style.width = lunghezzaDiv + 'px';

document.getElementById("titolo").innerHTML = `Benvenuto ${nomeGiocatore}!`;

var sceltaGiocatore;

function cliccatoSasso() {
    sceltaGiocatore = "Sasso";
    alert(nomeGiocatore + ", hai scelto " + sceltaGiocatore);
}
function cliccatoCarta() {
    sceltaGiocatore = "Carta"
    alert(nomeGiocatore + ", hai scelto " + sceltaGiocatore);
}
function cliccatoForbice() {
    sceltaGiocatore = "Forbice";
    alert(nomeGiocatore + ", hai scelto " + sceltaGiocatore);
}
function verdetto() {
    document.getElementById("carta").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("forbice").style.display = 'none';
    document.getElementById("conferma").style.display = 'none';
    document.getElementById("frase1234").style.display = 'none';
    document.getElementById("fracno").style.display = 'none';
    var sceltaComputer;
    if (sceltaGiocatore == "Carta") {
        document.getElementById("info").innerHTML = "Il computer ha scelto forbice. Tu, invece, hai scelto carta.";
    }
    if (sceltaGiocatore == "Forbice") {
        document.getElementById("info").innerHTML = "Il computer ha scelto sasso. Tu, invece, hai scelto forbice.";
    }
    if (sceltaGiocatore == "Sasso") {
        document.getElementById("info").innerHTML = "Il computer ha scelto carta. Tu, invece, hai scelto sasso.";
    }
    document.getElementById("titolo").innerHTML = nomeGiocatore + ", HAI PERSO MUHAHAHAHAHAH!";
}