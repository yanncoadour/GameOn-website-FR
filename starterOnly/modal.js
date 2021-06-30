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
    prenom.style.color = "red";
    prenom.style.borderColor = "red";
    erreurPrenom.style.display = "block";
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = "12px";
    erreurPrenom.style.marginTop = "5px";
    erreurPrenom.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom !";
    return false;
  } else {
    erreurPrenom.style.display = "none";
    prenom.style.border = "unset";
    prenom.style.color = "green";
    return true;
  }
}

//Nom
function validationNom() {
  let nom = document.getElementById("last");
  let erreurNom = document.getElementById("error-last");
  let regexNom = /^[a-zA-Z]{2}/;
  if (regexNom.test(nom.value) == false) {
    nom.style.color = "red";
    nom.style.borderColor = "red";
    erreurNom.style.display = "block";
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = "12px";
    erreurNom.style.marginTop = "5px";
    erreurNom.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom !";
    return false;
  } else {
    erreurNom.style.display = "none";
    nom.style.border = "unset";
    nom.style.color = "green";
    return true;
  }
}

//Email

function validationEmail() {
  let email = document.getElementById("email");
  let erreurEmail = document.getElementById("error-email");
  let regexEmail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    email.style.color = "red";
    email.style.borderColor = "red";
    erreurEmail.style.display = "block";
    erreurEmail.style.color = "red";
    erreurEmail.style.fontSize = "12px";
    erreurEmail.style.marginTop = "5px";
    erreurEmail.innerText = "Veuillez entrer une adresse mail valide !";
    return false;
  } else {
    erreurEmail.style.display = "none";
    email.style.border = "unset";
    email.style.color = "green";
    return true;
  }
}

//Date de naissance
function validationDate() {
  let dateNaissance = document.getElementById("birthdate");
  let erreurDateNaissance = document.getElementById("error-birthdate");
  if (dateNaissance.value == "") {
    erreurDateNaissance.innerHTML = "Veuillez entrer votre date de naissance.";
    dateNaissance.style.border = "2px solid red";
    erreurDateNaissance.style.fontSize = "12px";
    erreurDateNaissance.style.color = "red";
    return false;
  } else {
    document.getElementById("error-birthdate").innerHTML = "";
    dateNaissance.style.border = "none";
    return true;
  }
}

//nombre tournoi
function validationCombien() {
  let combien = document.getElementById("quantity");
  let erreurCombien = document.getElementById("error-quantity");
  if (combien.value < 0 || combien.value > 100 || combien.value == "") {
    erreurCombien.innerText =
      "Veuillez rentrer une quantité comprise entre 0 et 99";
    erreurCombien.style.fontSize = "12px";
    erreurCombien.style.color = "red";
    combien.style.border = "solid 2px red";
    return false;
  } else {
    erreurCombien.innerText = "";
    combien.style.border = "";
    return true;
  }
}

//Ville
function validationVille() {
  let ville = document.querySelectorAll("imput [type=radio]")
  let erreurVille = document.getElementById("error-city");
  for (i=0; i < ville.length; i++) {
    if(ville[i].checked){
      erreurVille.innerText="";
      return true;
    }else {
    erreurVille.innerText="Vous devez choisir une ville";
    return false;
    }
  } 
}

//Condition Utilisateur
function validationCondition() {
  let conditionUtilisateur = document.getElementById("checkbox1");
  let erreurConditionUtilisateur = document.getElementById(
    "error-conditionutilisateur"
  );
  if (conditionUtilisateur.checked == false) {
    erreurConditionUtilisateur.innerHTML =
      "Vous devez accepter les conditions d'utilisation.";
    erreurConditionUtilisateur.style.fontSize = "12px";
    erreurConditionUtilisateur.style.color = "red";
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
  } else if (validationVille() === false) {
    return false;
  } else if (validationCombien() === false) {
    return false;
  } else if (validationPrenom() === false) {
    return false;
  } else if (validationCondition() === false) {
    return false;
  } else {
      form.remove();
      let modal = document.querySelector(".modal-body");
      let message = document.createElement("p");
      message.classList.add("message-validation");
      message.textContent = "Merci ! Votre réservation a été recue !";
      modal.apprendChild(message);
      let fermetureModalBtn = document.createElement("button");
      fermetureModalBtn.classList.add("btn-submit");
      fermetureModalBtn.textContent = "fermer";
      fermetureModalBtn.addEventListener("click", closeModal);
      modal.appendChild(fermetureModalBtn);
  }
}
