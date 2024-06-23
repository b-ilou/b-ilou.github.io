window.onload = function() {

    document.getElementById("animation").src="Image/Chargement.gif";

    setTimeout(function() {
        document.getElementById('chargement').style.opacity = '0';
        document.getElementById("animation").src="Image/fondcouper.png";
        document.getElementById('animation').style.display = 'none';
        setTimeout(function() {
            document.getElementById('chargement').style.display = 'none';
        }, 1000);
        }, 4800);


};