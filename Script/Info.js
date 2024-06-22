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

function cvon(){
    document.getElementById("CV").src="Image/Info/CV.gif";
}

function cvoff(){
    document.getElementById("CV").src="Image/Info/CV.png";
}

function linkedinon(){
    document.getElementById("LinkedIn").src="Image/Info/LinkedIn.gif";
}

function linkedinoff(){
    document.getElementById("LinkedIn").src="Image/Info/LinkedIn.png";
}

function contacton(){
    document.getElementById("Contact").src="Image/Info/Contact.gif";
}

function contactoff(){
    document.getElementById("Contact").src="Image/Info/Contact.png";
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