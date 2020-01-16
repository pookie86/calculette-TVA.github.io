

var vingt = 1.20;
var dix = 1.10;
var huit = 1.085;
var sept = 1.070;
var cinq = 1.055;
var dixNeuf = 1.196;


function calculTva(montant){ //ONKEYUP

	montant = document.getElementById("ht").value;

	result20 = montant * vingt;
	result10 = montant * dix;
	result8 = montant * huit;
	result7 = montant * sept;
	result5 = montant * cinq;
	result19 = montant * dixNeuf;
	
	console.log(
	"le prix TTC avec 20% de TVA est de " + result20 + " euros " + "\n" +
	"le prix TTC avec 10% de TVA est de " + result10 + " euros " +"\n" +
	"le prix TTC avec 8% de TVA st de " + result8 + " euros " + "\n" +
	"le prix TTC avec 7% de TVA st de " + result7 + " euros " + "\n" +
	"le prix TTC avec 5% de TVA st de " + result5 + " euros " + "\n" +
	"le prix TTC avec 19% de TVA est de " + result19 + " euros ");
}
calculTva();

function miseAJourTaux() { //ONCLICK

	// select = document.getElementsByTagName("id").value;

	select10 = document.getElementById("dix");
	select20 = document.getElementById("vingt");
	select8 = document.getElementById("huit");
	select7 = document.getElementById("sept");
	select5 = document.getElementById("cinq");
	select19 = document.getElementById("dixNeuf");

  select10.onclick = function() {
	console.log("le prix TTC avec 10% de TVA est de " + result10 + " euros ");
	inpuTVA = document.getElementById("tva").value = result10 - (result10/dix);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result10;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "10%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${dix} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result10.toFixed(2)} €</li>`;

};

  select20.onclick = function() {
    console.log("le prix TTC avec 20% de TVA est de " + result20 + " euros ");
	inpuTVA = document.getElementById("tva").value = result20 - (result20/vingt);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result20;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "20%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${vingt} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result20.toFixed(2)} €</li>`;
};

  select8.onclick = function() {
    console.log("le prix TTC avec 8% de TVA est de " + result8 + " euros ");
	inpuTVA = document.getElementById("tva").value = result8 - (result8/huit);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result8;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "8,5%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${huit} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result8.toFixed(2)} €</li>`;
};

  select7.onclick = function() {
    console.log("le prix TTC avec 7% de TVA est de " + result7 + " euros ");
	inpuTVA = document.getElementById("tva").value = result7 - (result7/sept);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result7;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "7%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${sept} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result7.toFixed(2)} €</li>`;

};

  select5.onclick = function() {
    console.log("le prix TTC avec 5% de TVA est de " + result5 + " euros ");
	inpuTVA = document.getElementById("tva").value = result5 - (result5/cinq);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result5;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "5,5%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${cinq} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result5.toFixed(2)} €</li>`;

};

  select19.onclick = function() {
    console.log("le prix TTC avec 19% de TVA est de " + result19 + " euros ");
	inpuTVA = document.getElementById("tva").value = result19 - (result19/dixNeuf);
	inpuTVA.innerHTML;
	inpuTTC = document.getElementById("ttc").value = result19;
	inpuTTC.innerHTML;
	tauxTVA = document.getElementById("taux").value = "19,6%";
	tauxTVA.innerHTML;

	montant = document.getElementById("ht").value;

	recap = document.getElementById("recap").innerHTML = 
	`<li>Montant Hors Taxe : ${montant} €</li> 
	 <li>Montant TVA : ${dixNeuf} € avec un taux de TVA égal à ${tauxTVA} </li>
	<li>Montant TTC : ${result19.toFixed(2)} €</li>`;
};

}
miseAJourTaux();


