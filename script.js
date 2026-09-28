/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS
========================================================= */

const envelope =
    document.getElementById("envelope");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("main-content");


/* =========================================================
   FONCTION D'OUVERTURE
========================================================= */

function openInvitation() {


    /*
        Éviter que l'utilisateur clique
        plusieurs fois.
    */

    if (
        envelope.classList.contains("open")
    ) {

        return;

    }


    /*
        Animation de l'enveloppe
    */

    envelope.classList.add("open");


    /*
        Attendre que l'animation
        soit terminée.
    */

    setTimeout(() => {


        /*
            Faire disparaître
            la première page.
        */

        opening.classList.add("hide");


        /*
            Afficher l'invitation.
        */

        mainContent.classList.add("visible");


        /*
            Autoriser le scroll.
        */

        document.body.style.overflow =
            "auto";


        /*
            Revenir en haut de la page.
        */

        window.scrollTo({

            top: 0,

            behavior: "instant"

        });


    }, 1500);

}


/* =========================================================
   CLIC SUR L'ENVELOPPE
========================================================= */

envelope.addEventListener(
    "click",
    openInvitation
);


/* =========================================================
   CLAVIER
========================================================= */

envelope.addEventListener(
    "keydown",
    (event) => {


        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openInvitation();

        }

    }
);