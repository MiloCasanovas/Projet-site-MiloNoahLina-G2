//java noah
function reesto() {
  // Cacher l'article1
  document.getElementById("article1").style.display = "none";

  // Afficher le contenu
  document.getElementById("content").style.display = "block";
}
//java lina
document.getElementById("demande_prenom").addEventListener("submit", function(event) {
    event.preventDefault(); // Bloque l'envoi réel du formulaire

    var nombre = parseInt(document.getElementById("nombre_personne").value); // Récupère la valeur du nombre de personnes

    if (nombre > 10) {
        alert("Pour plus de 10 personnes, merci de ne pas nous contacter on a la flemme d'accueillir autant de personne.");
    } else {
        alert("Votre réservation a été prise en compte ! 🎉");

       
        document.getElementById("demande_prenom").style.display = "none";

        document.getElementById("questions").style.display = "block";
    }
}); 

var prenom;//C'est une variable globale

function entreePrenom() 
{
prenom = document.getElementById("votre_prenom").value;
document.getElementById("salut").innerHTML ="Bienvenue sur notre QUIZZ, tentez de gagner -15% sur votre prochain repas. ";
  //On cache le premier formulaire
  document.getElementById("demande_prenom").style.display = "none";
  //On montre les questions
  document.getElementById("questions").style.display = "block";
}

function calculePoints() {
  //Bonnes réponses :
  var bonneReponse1 = "q1r2";
  var bonneReponse2 = "q2r1";
  var bonneReponse3 = "q3r3";
  
  var texte1, texte2, texte3;
  points = 0;
  //la bonne réponse, avec les points qui se rajoutent si c le cas (q1)
  if (document.getElementById(bonneReponse1).checked == true) {
    texte1 = "<p class='bien'></p>"; 
    points = points + 5;
  } else {
    texte1 = "<p class='bad'></p>";
    points = points - 1;
  }

  
   if (document.getElementById(bonneReponse2).checked == true)
   //la bonne réponse, avec les points qui se rajoutent si c le cas (q2) 
   {
    texte2 = "<p class='bien'></p>";
    points = points + 5;
  } else {
    texte2 = "<p class='bad'></p>";
    points = points - 1;
   }   
  
 if (document.getElementById(bonneReponse3).checked == true)//la bonne réponse, avec les points qui se rajoutent si c le cas (q3) 
 {
    texte3 = "<p class='bien'></p>";
    points = points + 5;
  } else {
    texte3 = "<p class='bad'></p>";
    points = points - 1;
 
}
  textePoints = "<h2>Total: " + points + " points</h1>";
   if (points > 10) {
    // Message en gros si plus de 10 points
    textePoints = "<p class='bravo'>Vous avez droit à une réduction de 15% sur votre prochain repas !</p>"; }
    
   else if (points > 0) {
    textePoints = "<p class='resultat'>Pas mal ! Mais pas assez bien!</p>";
  } else {
    textePoints = "<p class='resultat'>Dommage</p>";
  }

  document.getElementById("correction").innerHTML = texte1 + texte2 + texte3 + textePoints;
}





//java milo

let titres = document.getElementsByClassName("titre"); // récupère tous les titres
let infos = document.getElementsByClassName("p1"); // récupère tous les paragraphes

for (let i = 0; i < titres.length; i++) {
    titres[i].onmouseover = function() {
        infos[i].style.display = "block"; // affiche le paragraphe correspondant
    };
    
    titres[i].onmouseout = function() {
        infos[i].style.display = "none"; // cache le paragraphe 
    };
}




let stars = document.getElementsByClassName("star");

for (let i = 0; i < stars.length; i++) {
    stars[i].onclick = function() {
        for (let j = 0; j < stars.length; j++) {
            if (j <= i) {
                stars[j].classList.add("active"); // Active les étoiles avant la sélection
            } else {
                stars[j].classList.remove("active"); // Désactive les étoiles après la sélection
            }
        }
    };
}
