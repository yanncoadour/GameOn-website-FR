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
const fermetureModalBtn = document.querySelectorAll(".close");
const btnSubmit = document.querySelector(".btn-submit");

// ---------- OUVERTURE/FERMETURE FENETRE MODALE --------------//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
fermetureModalBtn.forEach((close) =>
  close.addEventListener("click", closeModal)
);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// ------------------------FORMULAIRE ----------------------//

//Prénom
function validationPrenom() {
  let prenom = document.getElementById("first");
  let erreurPrenom = document.getElementById("error-first");
  let regexPrenom = /^[a-zA-Z]{2}/;
  if (regexPrenom.test(prenom.value) == false) {
    prenom.classList.add("champsnonvalide");
    erreurPrenom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom !";
    return false;
  } else {
    erreurPrenom.innerText = "";
    prenom.classList.remove("champsnonvalide");
    prenom.classList.add("champsvalide");
    return true;
  }
}

//Nom
function validationNom() {
  let nom = document.getElementById("last");
  let erreurNom = document.getElementById("error-last");
  let regexNom = /^[a-zA-Z]{2}/;
  if (regexNom.test(nom.value) == false) {
    nom.classList.add("champsnonvalide");
    erreurNom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom !";
    return false;
  } else {
    erreurNom.innerText = "";
    nom.classList.remove("champsnonvalide");
    nom.classList.add("champsvalide");
    return true;
  }
}

//Email

function validationEmail() {
  let email = document.getElementById("email");
  let erreurEmail = document.getElementById("error-email");
  let regexEmail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    email.classList.add("champsnonvalide");
    erreurEmail.innerText = "Veuillez entrer une adresse mail valide !";
    return false;
  } else {
    erreurEmail.innerText = "";
    email.classList.remove("champsnonvalide");
    email.classList.add("champsvalide");
    return true;
  }
}

//Date de naissance
function validationDate() {
  let dateNaissance = document.getElementById("birthdate");
  let erreurDateNaissance = document.getElementById("error-birthdate");
  if (dateNaissance.value == "") {
    erreurDateNaissance.innerText = "Veuillez entrer votre date de naissance.";
    dateNaissance.classList.add("champsnonvalide");
    return false;
  } else {
    dateNaissance.classList.remove("champsnonvalide");
    dateNaissance.classList.add("champsvalide");
    erreurDateNaissance.innerText = " ";
    return true;
  }
}

//nombre tournoi
function validationCombien() {
  let combien = document.getElementById("quantity");
  let erreurCombien = document.getElementById("error-quantity");
  if (combien.value < 0 || combien.value > 100 || combien.value == "") {
    erreurCombien.innerText = "Veuillez rentrer une quantité comprise entre 0 et 99";
    combien.classList.add("champsnonvalide");
    return false;
  } else {
    erreurCombien.innerText = "";
    combien.classList.remove("champsnonvalide");
    combien.classList.add("champsvalide");
    return true;
  }
}

//Ville
function validationVille() {
  let villes = document.querySelectorAll("imput [type=radio]");
  let erreurVille = document.getElementById("error-city");
    if(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){
      erreurVille.textContent="";
      return true;
    }
    erreurVille.innerText="Vous devez choisir une ville"; 
    return false;  
  } 


//Condition Utilisateur
function validationCondition() {
  let conditionUtilisateur = document.getElementById("checkbox1");
  let erreurConditionUtilisateur = document.getElementById("error-conditionutilisateur");
  if (conditionUtilisateur.checked == false) {
    erreurConditionUtilisateur.innerHTML = "Vous devez accepter les conditions d'utilisation.";  
    return false;
  } else {
    erreurConditionUtilisateur.innerHTML = "";
    return true;
  }
}

// validation formulaire

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkImputs();
});

function checkImputs() {
  if (validationPrenom() === false) {
    return false;
  } else if (validationNom() === false) {
    return false;
  } else if (validationEmail() === false) {
    return false;
  } else if (validationDate() === false) {
    return false;
  } else if (validationCombien() === false) {
    return false;
  } else if (validationVille() === false) {
    return false;
  } else if (validationCondition() === false) {
    return false;
  } else {
     form.remove();
     let modal = document.querySelector(".modal-body");
     let message = document.createElement("p");
     message.classList.add("message-validation");
     message.textContent = "Merci! Votre réservation a été recue !";
     message.style.marginBottom = "225px";
     message.style.marginTop = "225px";
     modal.appendChild(message);
     let fermetureModalBtn = document.createElement("button");
     fermetureModalBtn.classList.add("btn-submit");
     fermetureModalBtn.textContent = "fermer";
     fermetureModalBtn.addEventListener("click", closeModal);
     modal.appendChild(fermetureModalBtn);
  }
}

