function checkScreenWidth() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        // Action à exécuter lorsque la largeur de l'écran est inférieure ou égale à 1000 pixels
        document.getElementById("affichageMobile").style.display = "block";
        document.getElementById("Mobile").style.display = "flex";
        console.log("L'écran est maintenant inférieur ou égal à 1000 pixels de largeur");
    } else {
        // Réinitialiser ou faire autre chose lorsque la largeur de l'écran est supérieure à 1000 pixels
        document.getElementById("affichageMobile").style.display = "none";
        document.getElementById("Mobile").style.display = "none";
        console.log("L'écran est maintenant supérieur à 1000 pixels de largeur");
    }
}

// Exécuter la fonction lors du chargement de la page
window.onload = checkScreenWidth;

// Exécuter la fonction chaque fois que la taille de la fenêtre change
window.onresize = checkScreenWidth;