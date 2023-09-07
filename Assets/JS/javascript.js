/* Script Nom Prénom */
var nom = window.prompt("Saisissez votre nom");
var prenom = window.prompt("Saisissez votre prénom");

alert("vous vous appelez" + nom + " " + prenom);

/* Script Produit de 2 nombre */

var nombre1 = window.prompt("Choisissez un premier nombre");
var nombre2 = window.prompt("Choisissez un deuxième nombre");

alert("Le produit de" + " " + nombre1 + " " + "et" + " " + nombre2 + " " + "est" + " " + nombre1*nombre2);

/* Script degrés Celsius -> Fahrenheit */

var C = window.prompt("Indiquez les degrés Celsius");
var F = (C*9/5) + 32 ;

alert( C + " " + "degrés Celsius équivaut à " + " " + F + " " + "Fahrenheit");