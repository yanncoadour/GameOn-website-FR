function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// ---------- OUVERTURE/FERMETURE FENETRE MODALE --------------//
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
fermetureModalBtn.forEach((close) => close.addEventListener("click", closeModal));

// close modal form
function closeModal () {
  modalbg.style.display = "none";
}

// ------------------------FORMULAIRE ----------------------//

//REGEX
let regexPrenom = /^[a-zA-Z]{2}/
let regexNom = /^[a-zA-Z]{2}/
let regexEmail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/

//Variables
let nom = document.getElementById('last');
let prenom = document.getElementById('first');
let email = document.getElementById('email');
let datenaissance = document.getElementById('birthdate');
let combien = document.getElementById('quantity');
//Variables erreurs
let erreurNom = document.getElementById('error-last');
let erreurPrenom = document.getElementById('error-first');
let erreurEmail = document.getElementById('error-email');
let erreurDateNaissance = document.getElementById('error-birthdate');
let erreurCombien = document.getElementById('error-quantity')
let erreurVille = document.getElementById('error-city');
let erreurConditionUtilisateur = document.getElementById('error-conditionutilisateur');

// Fonction Prénom
prenom.addEventListener("input", function(){
  if (regexPrenom.test(prenom.value) == false) {
    prenom.style.color = 'red';
    prenom.style.borderColor = 'red';
    erreurPrenom.style.display = 'block';
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = "12px";
    erreurPrenom.style.marginTop = "5px";
    erreurPrenom.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom !';
  } else if 
    (regexPrenom.test(prenom.value) == true) {
    erreurPrenom.style.display = 'none';
    prenom.style.border = 'unset';
    prenom.style.color = 'green';

  }
  else{
    erreurPrenom.style.display = 'none';
  }
})

//Fonction Nom
nom.addEventListener("input", function(){
  if (regexNom.test(nom.value) == false) {
    nom.style.color = 'red';
    nom.style.borderColor = 'red';
    erreurNom.style.display = 'block';
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = "12px";
    erreurNom.style.marginTop = "5px";
    erreurNom.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom !';
  } else if 
    (regexNom.test(nom.value) == true) {
    erreurNom.style.display = 'none';
    nom.style.border = 'unset';
    nom.style.color = 'green';

  }
  else{
    erreurNom.style.display = 'none';
  }
})
// Fonction Email

email.addEventListener("input", function(){
  if (regexEmail.test(email.value) == false) {
    email.style.color = 'red';
    email.style.borderColor = 'red';
    erreurEmail.style.display = 'block';
    erreurEmail.style.color = "red";
    erreurEmail.style.fontSize = "12px";
    erreurEmail.style.marginTop = "5px";
    erreurEmail.innerText = 'Veuillez entrer une adresse mail valide !';
  } else if 
    (regexEmail.test(email.value) == true) {
    erreurEmail.style.display = 'none';
    email.style.border = 'unset';
    email.style.color = 'green';

  }
  else{
    erreurEmail.style.display = 'none';
  }
})
