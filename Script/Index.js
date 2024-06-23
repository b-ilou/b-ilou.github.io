function descente(){
    document.getElementById('proj1').style.marginTop = '5px';
}

function remonte(){
    document.getElementById('proj1').style.marginTop = '-30px';
}

function descente1(){
    document.getElementById('proj2').style.marginTop = '5px';
}

function remonte1(){
    document.getElementById('proj2').style.marginTop = '-30px';
}

function descente2(){
    document.getElementById('proj3').style.marginTop = '5px';
}

function remonte2(){
    document.getElementById('proj3').style.marginTop = '-30px';
}

function descente3(){
    document.getElementById('proj4').style.marginTop = '5px';
}

function remonte3(){
    document.getElementById('proj4').style.marginTop = '-30px';
}

function descente4(){
    document.getElementById('proj5').style.marginTop = '5px';
}

function remonte4(){
    document.getElementById('proj5').style.marginTop = '-30px';
}

function graphismeon(){
    document.getElementById("Graphisme").src="Image/Accueil/Graphisme.gif";
}

function graphismeoff(){
    document.getElementById("Graphisme").src="Image/Accueil/Graphisme.png";
}

function devon(){
    document.getElementById("Dev").src="Image/Accueil/dev.gif";
}

function devoff(){
    document.getElementById("Dev").src="Image/Accueil/dev.png";
}

function audiovisuelon(){
    document.getElementById("Audiovisuel").src="Image/Accueil/AV.gif";
}

function audiovisueloff(){
    document.getElementById("Audiovisuel").src="Image/Accueil/AV.png";
}

function pluson(){
    document.getElementById("Plus").src="Image/Accueil/plus.gif";
}

function plusoff(){
    document.getElementById("Plus").src="Image/Accueil/Plus.png";
}

const textElement = document.querySelector('.Titre');

function setGradientAngle(angle) {
    textElement.style.setProperty('--gradient', `-webkit-linear-gradient(${angle}, #ffef0a 0%, #ffbb3e 30%, #ffee00 100%)`);
}

let increasing = true;
let currentPercentage = 0;
const step = 0.1; // Vous pouvez ajuster la vitesse en modifiant cette valeur

function updateGradientAngle() {
    if (increasing) {
        currentPercentage += step;
        if (currentPercentage >= 100) {
            currentPercentage = 100;
            increasing = false;
        }
    } else {
        currentPercentage -= step;
        if (currentPercentage <= 0) {
            currentPercentage = 0;
            increasing = true;
        }
    }

    setGradientAngle(`${currentPercentage}deg`);
    requestAnimationFrame(updateGradientAngle);
}

updateGradientAngle();
