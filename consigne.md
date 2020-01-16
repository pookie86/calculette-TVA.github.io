

// ------ AIDE AU DÉVELOPPEMENT ------

// 1. Pour capter l'évènement qui permet de calculer le taux de tva lorsque l'on modifie l'input, 
//nous utiliserons l'attribut onkeyup côté HTML qui vient appeler la fonction présente dans votre code JS.
// onkeyup="calculTva('montantTVA')" => OK


// 2. Pour capter l'évèment qui viendra mettre à jour le taux de tva sélectionné dans l'input TAUX TVA, 
//nous utiliserons l'attribut
// onClick="miseAJourTaux(10);" côté HTML qui vient appeler la fonction présente dans votre code JS. => OK


// 3. Pour sélectionner un élèment HTML par son ID en JS et lui attribuer une valeur :
// document.getElementById('monId').value => OK


// 4. Pour sélectionner un élèment HTML par sa classe en JS et lui attribuer une valeur :
// document.getElementsByClassName('maClasse');


// 5. Pour imbriquer de l'HTML dans un élément HTML par son ID, 
//par exemple pour afficher les différentes informations concernant la TVA en bas de page, nous utiliserons :
// document.getElementById("totalTva").innerHTML

// ps: Pour faire "disparaître" la mention "Cliquez sur n'importe quel nombre pour le modifier." et afficher 

// Montant Hors Taxes :
// Montant TVA :
// Montant TTC :

// nous utiliserons donc simplement ".innerHTML" sur l'élèment HTML contenant le texte pour y modifier son contenu.


// 6.Cette fonction permet de donner un style css particulier lorsqu'une case est cliqué pour une saisie.

// function initInput(depart)
// {
// 	var inputDepart = document.getElementById(depart);
// 	inputDepart.className="input-calcul  saisie-active";
// 	inputDepart.select();
// 	inputDepart.focus();
// 	inputDepart.setSelectionRange(0, 9999);
// }



// 7. Si je souhaite capter l'événement qui permet de savoir que je sors d'un input et que je perd son focus, 
//pour lui réattribuer une valeur par défaut si j'ai supprimé la valeur par défaut "0 €", 
//nous utiliserons l'attribut HTML onBlur qui ici permet d'appeler la fonction reInitInput() dans votre code JS.

// onBlur="reInitInput('montantTTC');"

// Pour récupérer la valeur de l'input et savoir quelle est sa valeur, 
//c'est à dire si oui ou non nous devons remettre la valeur par défaut "0 €", 
//nous utiliserons la méthode objet ".value".
// var saisie = document.getElementById(depart).value;

// Ici une condition sera donc à appliquer: 

//cette fonction permet de rétablir un style css à l'input qui aura été quité (perte de focus) et 
//d'ajouter le symbole '€'.

// function reInitInput(depart)
// {
// 	var saisie = document.getElementById(depart).value;
// 	saisie = saisie.trim();
// 	if(saisie.length == 0) // si rien est écrit
// 	{
// 		// Alors je lui rajoute la valeur par défaut 0 €
// 	}
// 	else if(saisie.indexOf('€') === -1) // si je ne trouve pas déjà ce symbole écris, je le rajoute.
// 	{
		
// 	}
// }


// ----- POUR LA PREMIÈRE JOURNÉE TP -----

// 1. Créér la maquette html => OK
// 2. Créér la fonction qui permet de calculer la TVA => OK
//(pour l'instant sans récupérer de valeur depuis le DOM HTML)
// 3. Créér la fonction qui permet de mettre à jour les montants dans les input => OK
//(Voir "aide au développement ci-dessous") lorsque je séléctionne la valeur de la tva que je souhaite appliquer 
//(Même si pour l'instant vous ne trouvez pas comment changer la valeur de l'input "TAUX TVA" dans le DOM)


// 4. Créér la fonction qui permet de faire "disparaître" la mention 
//"Cliquez sur n'importe quel nombre pour le modifier." et faire apparaître le résumé 
//(pour le moment sans valeur) (voir aide au développement) : => OK

// Montant Hors Taxes :
// Montant TVA :
// Montant TTC :




// ------ POUR LES PLUS AVANCÉS ------

// - Une fois les taux de TVA calculés par votre fonction renseignés la valeur dans les champs à l'écran sur le DOM en ayant récupéré au préalable les valeurs renseignées dans vos inputs à l'écran

// - Par défaut, mettre une tva à 20% si aucune tva n'a été sélectionnée

// - Une fois les montants calculés, recalculer automatiquement les valeurs si je change le taux de TVA.

// - Mettre un focus sur l'input où vous avez cliqué avec du code JS (voir aide au développement)

// - Si je supprime les valeurs dans un input et que je ne renseigne aucune valeur et que je sors de l'input,
// lui remettre la valeur de départ "0 €"




//  !!!!!! POUR CETTE EXERCICE, LE DESIGN DU HTML N'EST PAS IMPORTANT, VOUS ÊTES LIBRES D'UTILISER 
//  BOOSTRAP ET/OU LES FLEXBOX POUR AVOIR UN RENDU RAPIDE !!!!!!


// ---------- L'OBJECTIF A L'ISSU DES DEUX TP JS ----------

// - Créér une calculatrice qui calcul la tva et le montant TTC des valeurs renseignées

// - Je peux séléctionner le montant de la tva que je souhaite appliquer

// - Une fois que j'ai renseigné un Montant Hors Taxes, le calcul se fait et les champs sont remplis automatiquement;
// La mention "Cliquez sur n'importe quel nombre pour le modifier." disparait et laisse place à un résumé des valeurs, exemple :

// Montant Hors Taxes : 1 €
// Montant TVA : 0 € avec un taux de TVA égal à 20 %
// Montant TTC : 1 €