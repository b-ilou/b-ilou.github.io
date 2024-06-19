function none(){
    document.getElementById('body').style.backgroundImage = 'url(./Image/fond.png)';
    document.getElementById("competence").style.opacity = '0%';
}

function ccf(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/Graphisme/ccf_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/dev/fondWave.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function cake(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/Graphisme/Cake_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/dev/fondWebdoc.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function cover(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/Graphisme/Cover_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/dev/fondJPO.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function changeDescription(title, description) {
    setTimeout(function() {
        var descriptionElement = document.getElementById('description');
        descriptionElement.querySelector('h1.Titre').textContent = title;
        descriptionElement.querySelector('p').textContent = description;
        }, 2000);

}

function resetDescription() {
    var descriptionElement = document.getElementById('description');
    descriptionElement.querySelector('h1.Titre').textContent = 'Dév. web';
    descriptionElement.querySelector('p').textContent = "Vous retrouverez sur cette page un certain nombre de projets web que j'ai pu réaliser, principalement en cours lors de projets scolaires. Certains projets ont été réalisés seul, tandis que d'autres l'ont été en groupe.";
}