function none(){
    document.getElementById('body').style.backgroundImage = 'url(./Image/fond.png)';
    document.getElementById("competence").style.opacity = '0%';
}
    
function lesac(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/audiovisuel/Sac_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/audiovisuel/FondLesac.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function vrealite(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/audiovisuel/Vrealité_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/audiovisuel/FondVrealite.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function pub(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/audiovisuel/pub_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/audiovisuel/FondPub.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function ccf(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/audiovisuel/ccf_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/audiovisuel/FondCCF.png";
            document.getElementById("competence").style.opacity = '100%';
            }, 4050);
        
}

function nuitinfo(){
    document.getElementById("animation").src="Image/animation.gif";
    document.getElementById('animation').style.opacity = '100%'

    setTimeout(function() {
        //changer l'url
        document.getElementById('body').style.backgroundImage = 'url(Image/Audiovisuel/Nuitinfo_bg.png)';
        }, 2000);

        setTimeout(function() {
            document.getElementById("animation").src="Image/fondcouper.png";
            document.getElementById('animation').style.opacity = '75%'

            document.getElementById("competence").src="Image/audiovisuel/FondLesac.png";
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
    descriptionElement.querySelector('h1.Titre').textContent = 'Audiovisuel';
    descriptionElement.querySelector('p').textContent = "Vous retrouverez sur cette page un certain nombre de projets audiovisuel que j'ai pu réaliser, principalement en cours lors de projets scolaires. Certains projets ont été réalisés seul, tandis que d'autres l'ont été en groupe.";
}

const slider = document.getElementById('slider');
const btngauche = document.getElementById('btngauche');
const btndroite = document.getElementById('btndroite');

let scrollAmount = 0;
const slideWidth = slider.clientWidth;
const totalSlides = document.querySelectorAll('.slide-group').length;
const maxScroll = (totalSlides - 1) * slideWidth;

btngauche.addEventListener('click', () => {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

btndroite.addEventListener('click', () => {
    scrollAmount += slideWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});


//apparition disparition bouton
function boutondroite(){
    document.getElementById('slider').style.pointerEvents = 'none';
    document.getElementById('btndroite').style.display = "none";
    document.getElementById('btngauche').style.display = "block";
    
    setTimeout(function() {
        document.getElementById('slider').style.pointerEvents = 'all';
        }, 700);
}

function boutongauche(){
    document.getElementById('slider').style.pointerEvents = 'none';
    document.getElementById('btndroite').style.display = "block";
    document.getElementById('btngauche').style.display = "none";

    setTimeout(function() {
        document.getElementById('slider').style.pointerEvents = 'all';
        }, 700);
}


//effet fleche triangle
    const svgdroit = document.getElementById('svgdroit');
    const svggauche = document.getElementById('svggauche');
    const triangleGrisdroit = document.querySelector('.triangledroitgris');
    const triangleGrisgauche = document.querySelector('.trianglegauchegris');

    svgdroit.addEventListener('mouseover', () => {
        triangleGrisdroit.style.transform = 'rotate(90deg) translate(0px, 10px)';
    });

    svgdroit.addEventListener('mouseout', () => {
        triangleGrisdroit.style.transform = 'rotate(90deg) translate(0px, 17.5px)';
    });

        svggauche.addEventListener('mouseover', () => {
            triangleGrisgauche.style.transform = 'rotate(-90deg) translate(0px, 10px)';
          });
      
          svggauche.addEventListener('mouseout', () => {
            triangleGrisgauche.style.transform = 'rotate(-90deg) translate(0px, 17.5px)';
          });