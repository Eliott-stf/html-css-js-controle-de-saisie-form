



function handlerDomContentLoaded() {
    console.log("DOM chargé !");

    // Elements du DOM
    const
        elInputFirstName = document.getElementById('input-firstname'),
        elInputLastName = document.getElementById('input-lastname'),
        elEmail = document.getElementById('input-email');

    // -- Fonctions -- 


    // -- Gestionnaires d'évenements --
    function handlerFormSubmit(evt){
        //Bloque le comportement par défaut de cet evenement
        evt.preventDefault()

        console.log('Formulaire soumis ...');
        
    }

    //-- Initialisation --
    // Ecouteur sur le "submit" du formulaire
    document.forms[0].addEventListener('submit', handlerFormSubmit);




}

document.addEventListener('DOMContentLoaded', handlerDomContentLoaded);