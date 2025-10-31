
// Constantes de validation du formulaire
//La RegEx du Nom / Prénom
const VALID_NAME = /^[A-Za-z][A-Za-z]*[A-Za-z]$/;
//La RegEx de l'email
const VALID_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function handlerDomContentLoaded() {
    console.log("DOM chargé !");

    // Elements du DOM
    const
        elInputFirstName = document.getElementById('input-firstname'),
        elInputLastName = document.getElementById('input-lastname'),
        elInputEmail = document.getElementById('input-email');

    // -- Fonctions -- 

    function removeError(elInput) {

        //On vide sa valeur
        elInput.value='';

        // On enleve la classe error a la section
        elInput.parentElement.classList.remove('error');

        // On recherche l'élement JUSTE APRES l'input (sensé etre le message d'erreur)
        const elMessage = elInput.nextElementSibling;

        //Si elMessage n'existe pas, on continue la boucle
        if (!elMessage) return;

        // Si ca existe je l'enleve du DOM
        elMessage.remove();
    }


    /**
     * Fabrique un <div> destiner à contenir le message d'érreur donné 
     * 
     * @param {string} message Texte d'erreur à afficher 
     *  
     * @returns HTMLDivElement <div> du message d'erreur 
     */
    function makeErrorElement(message) {
        /* <div class="error-message">[message]</div> */
        const elError = document.createElement('div');
        elError.classList.add('error-message');
        elError.textContent = message;
        return elError;
    }

    // -- Gestionnaires d'évenements --
    function handlerFormSubmit(evt) {

        //Bloque le comportement par défaut de cet evenement
        evt.preventDefault()

        console.log('Formulaire soumis ...');

        // Remise a zéro des erreurs
        const errorInputs = this.querySelectorAll('.error > input:not([type="checkbox"])');
        for (let elInput of errorInputs) {
            removeError(elInput);
        }

        let hasError = false;

        // Validité du prénom
        if (!VALID_NAME.test(elInputFirstName.value)) {

            // On signale au code qu'il y a une erreur
            hasError = true;

            // On signale a l'utilisateur qu'il y a une erreur
            elInputFirstName.parentElement.classList.add('error');
            elInputFirstName.after(makeErrorElement('Format du prénom invalide'))

        }

        // Validité du nom 
        if (!VALID_NAME.test(elInputLastName.value)) {

            // On signale au code qu'il y a une erreur
            hasError = true;

            // On signale a l'utilisateur qu'il y a une erreur
            elInputLastName.parentElement.classList.add('error');
            elInputLastName.after(makeErrorElement('Format du nom invalide'))

        }
        // Validité du mail
        if (!VALID_EMAIL.test(elInputEmail.value)) {

            // On signale au code qu'il y a une erreur
            hasError = true;

            // On signale a l'utilisateur qu'il y a une erreur
            elInputEmail.parentElement.classList.add('error');
            elInputEmail.after(makeErrorElement('Format du mail invalide'))

        } 

        /* S'il y a une erreur, on sort*/
        if (hasError) return;

        // Sinon on poste le formulaire
        this.submit();

    }

    // Gestion du focus sur les <input> non checkbox 
    function handlerFieldFocus(){
        removeError(this);
    }

    //-- Initialisation --
    // Ecouteur sur le "submit" du formulaire
    document.forms[0].addEventListener('submit', handlerFormSubmit);

    //Ecouteur sur le focus des <input>
    elInputFirstName.addEventListener('focus', handlerFieldFocus);
    elInputLastName.addEventListener('focus', handlerFieldFocus);
    elInputEmail.addEventListener('focus', handlerFieldFocus);
}

document.addEventListener('DOMContentLoaded', handlerDomContentLoaded);