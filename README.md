<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="style.css" rel="stylesheet" type="text/css"> 
  <title>reservation -delivrance</title>
</head>
<body>
    <h1>Pour réserver une table</h1>
    <form>
        <label>Votre nom:</label>
          <input type="text" name="nom" required>
          <br><br>     <!-- Nom -->

        <!-- Email -->
        <label>Email :</label>
          <input type="email" name="email"required>
          <br><br>

        <label>Date de réservation :</label>  <!-- calendrier -->      
          <input type="date" name="date">
        <br><br>
      
       <label>Heure de réservation:</label>  <!-- une heure -->      
          <input type="time" name="hour" min="12:00" max="21:00"> <!--on a un maximun et un minimm-->
        <br><br>
      
       <label>combien de personne vous serez:</label>  <!--nombre de place -->    
          <input type="number" name="nbPersonne" min="0" max=40> <!--on a un minimm, 40 est le maximum du resto-->
        <br><br>
      
        <label> indicaction particulier(handicape ect)</label> <!--pour des info en plus--->
         <input type="text" name="indication particulière">
           <br><br>
      
        <input type="submit" value="Envoyer">   <!-- Bouton pour Envoyer -->
    </form>
</body>
</html>
