<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Style/Inscription.css">
    <title>Inscription</title>
</head>
<body>
    <header>
        <a href="Accueil.html"><img id="logo" src="Ressources/Logo.png"></a>
            <nav>
                <div id="Lien">
                    <a class="nav" href="#">Coiffures</a>
                    <a class="nav" href="Homme.html">Homme</a>
                    <a class="nav" href="Femme.html">Femme</a>
                </div>
                <a class="nav" href="Salon.html">Salon</a>
                <a class="nav" href="Tarifs.html">Tarifs</a>
                <a class="nav" href="Propos.html">À propos</a>
                <img id="compte" src="Ressources/Compte.png">
            </nav>
    </header>
    <br><br><br>
    <form action="Connexion.html">

        <h1>S'inscrire</h1>
        <br><br>
        <div id="inputs">        
          <input type="name" placeholder="Prenom" />
          <input type="lastname" placeholder="Nom de famille">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe">
        </div>
        <br>
        <p id="inscription">J'ai déjà un compte. Je me <a id="crée" href="Connexion.html">connecte</a>.</p>
        <div align="center"><br>
          <button type="submit">S'inscrire</button>
        </div>
        <br>
      </form>
      <br><br><br><br><br>
      <footer>
          <section id="Adresse">
              <h2>Bubble Waves</h2>
              <p class="mention">490 Bd du Docteur Jean Bastide<br>30240 Le Grau-du-Roi<br>09 51 32 05 48<br>contact@bubblewaves.fr</p>
          </section>
          <div id="trait"></div>
          <section id="Mention">
              <img id="reseau" src="Ressources/Reseau.png">
              <p class="mention">Bubble Waves © 2022 | Salon de coiffure à Le Grau-du-Roi</p>
              <p class="mention"> | Mentions légales | Plan du site</p>
          </section>
      </footer>
    </body>
    </html>