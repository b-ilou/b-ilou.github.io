var vid = document.getElementById("myVideo");

var interval = setInterval(myFunction, 10);

function myFunction() {

  if (Math.floor(vid.currentTime) == 9) {
    document.getElementById("Moi").innerHTML = '<p id="Moi"><a href=#mavideo onclick="timecode(19)"><strong class="couleur">Moi:</strong> <color class="beige"> Pourquoi a tu commencé le streaming ???</color></a></p>';
  }

  if (Math.floor(vid.currentTime) == 19) {
    document.getElementById("Moi").innerHTML = '<p id="Moi"><a href=#mavideo onclick="timecode(28)"><strong class="couleur">Moi:</strong> <color class="beige"> Ça a étais difficile au début ?</color></a></p>';
  }

  if (Math.floor(vid.currentTime) == 28) {
    document.getElementById("Moi").innerHTML = '<p id="Moi"><a href=#mavideo onclick="timecode(44)"><strong class="couleur">Moi:</strong> <color class="beige"> Comment tu pourrait décrire tes streams ?</color></a></p>';
  }

  if (Math.floor(vid.currentTime) == 44) {
    document.getElementById("Moi").innerHTML = '<p id="Moi"><a href=#mavideo onclick="timecode(68)"><strong class="couleur">Moi:</strong> <color class="beige"> Pourquoi parle tu anglais dans tes vidéos ?</color></a></p>';
  }

  if (Math.floor(vid.currentTime) == 68) {
    document.getElementById("Moi").innerHTML = '<strong class="bleu">Cayto1:</strong> Coucou Raion et la commu !!<br><strong class="rouge">Groovyt:</strong> Où sont les bready ??';
  }

  if (Math.floor(vid.currentTime) == 9) {
    document.getElementById("chat1").innerHTML = '<strong class="bleu">IOM:</strong> Tu stream depuis combien de temps ???<br><strong class="rouge">mr_0b:</strong> Salut tous le monde 👋';
  }
  if (Math.floor(vid.currentTime) == 15) {
    document.getElementById("chat2").innerHTML = '<strong class="vert">ZimoriGames:</strong> Déjà 2 ans !!<br><strong class="violet">zorbey_67:</strong> Ca fait déjà 2ans🫠<br>';
  }
  if (Math.floor(vid.currentTime) == 19) {
    document.getElementById("chat3").innerHTML = '<strong class="bleu">IOM:</strong> Pourquoi à tu commencé le streaming ???<br><strong class="rouge">PledgekcScotch:</strong> Mdrr @zorbey_6 même moi ça ma choquer<br>';
  }
  if (Math.floor(vid.currentTime) == 28) {
    document.getElementById("chat4").innerHTML = '<strong class="bleu">IOM:</strong> Ça a étais difficile au début ?<br>';
  }

  if (Math.floor(vid.currentTime) == 35) {
    document.getElementById("chat5").innerHTML = '<strong class="bleu">Jothano:</strong> Tu a étais courageuse 💪<br><strong class="violet">Bilou:</strong> Heureusement que tu a osé<br>';
  }

  if (Math.floor(vid.currentTime) == 40) {
    document.getElementById("chat6").innerHTML = '<strong class="orange">Gramkajaw:</strong> Elle parle de nous là<br><strong class="violet">Pesm3:</strong> C nous C nous<br>';
  }

  if (Math.floor(vid.currentTime) == 45) {
    document.getElementById("chat7").innerHTML = '<strong class="bleu">IOM:</strong> Comment tu pourrait décrire tes streams ?<br>';
  }

  if (Math.floor(vid.currentTime) == 52) {
    document.getElementById("chat10").innerHTML = '<strong class="vert">monalij:</strong> Pour le coup on ce sent vraiment à laise sur tes stream<br>';
  }

  if (Math.floor(vid.currentTime) == 54) {
    document.getElementById("chat9").innerHTML = '<strong class="orange">Gutugu:</strong> C réussi !!<br>';
  }

  if (Math.floor(vid.currentTime) == 56) {
    document.getElementById("chat11").innerHTML = '<strong class="rouge">Moozie:</strong> C exactement ça<br>';
  }

  if (Math.floor(vid.currentTime) == 57) {
    document.getElementById("chat12").innerHTML = '<strong class="orange">Squoozo:</strong> @monalij entièrement daccord avec toi<br>';
  }

  if (Math.floor(vid.currentTime) == 68) {
    document.getElementById("chat8").innerHTML = '<strong class="bleu">IOM:</strong> Pourquoi parle tu anglais dans tes vidéos ?<br>';
  }

  if (Math.floor(vid.currentTime) == 79) {
    document.getElementById("chat13").innerHTML = '<strong class="orange">PledgekcScotch:</strong> Ah je comprends mieux maintenant<br>';
  }

  if (Math.floor(vid.currentTime) == 88) {
    document.getElementById("chat14").innerHTML = '<strong class="rouge">mr_0b:</strong> Tu a de la chance davoir une communauté si différente<br>';
  }

  if (Math.floor(vid.currentTime) == 94) {
    document.getElementById("chat15").innerHTML = '<strong class="violet">poolbran:</strong> Tu va jouer à quoi aujourdhui<br>';
  }

  if (Math.floor(vid.currentTime) == 95) {
    document.getElementById("chat16").innerHTML = '<strong class="bleu">monalij:</strong> Bye tous le monde 👋<br>';
  }
}

var lecteur;
function timecode(secondes) {
    lecteur = document.getElementById("myVideo");
    lecteur.currentTime = (secondes);
    lecteur.play();
}