/* =========================================================
   ÉLÉMENTS
========================================================= */

const envelope =
    document.getElementById("envelope");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("main-content");

const rsvpButton =
    document.getElementById("rsvpButton");

const rsvpModal =
    document.getElementById("rsvpModal");

const closeModal =
    document.getElementById("closeModal");

const rsvpForm =
    document.getElementById("rsvpForm");

const successMessage =
    document.getElementById("successMessage");


/* =========================================================
   OUVRIR L'ENVELOPPE
========================================================= */

function openInvitation() {

    /* éviter plusieurs clics */

    if (
        envelope.classList.contains("open")
    ) {

        return;

    }


    /* animation du rabat */

    envelope.classList.add("open");


    /*
        Attendre la fin de l'animation
        avant de faire apparaître la feuille.
    */

    setTimeout(function () {

        opening.classList.add("hide");

        mainContent.classList.add("visible");

        document.body.style.overflow = "auto";

        /*
            Retourner en haut de la page
        */

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1700);

}


/* =========================================================
   CLIC SUR ENVELOPPE
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
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openInvitation();

        }

    }
);


/* =========================================================
   OUVRIR RSVP
========================================================= */

rsvpButton.addEventListener(
    "click",
    function () {

        rsvpModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }
);


/* =========================================================
   FERMER RSVP
========================================================= */

function closeRsvp() {

    rsvpModal.classList.remove("show");

    document.body.style.overflow = "auto";

}


closeModal.addEventListener(
    "click",
    closeRsvp
);


/* =========================================================
   CLIQUER À L'EXTÉRIEUR
========================================================= */

rsvpModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === rsvpModal
        ) {

            closeRsvp();

        }

    }
);


/* =========================================================
   TOUCHE ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            rsvpModal.classList.contains("show")
        ) {

            closeRsvp();

        }

    }
);


/* =========================================================
   RSVP
========================================================= */

rsvpForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /*
            Récupération des informations
        */

        const name =
            document
                .getElementById("guestName")
                .value;

        const attendance =
            document
                .getElementById("attendance")
                .value;

        const guests =
            document
                .getElementById("guestNumber")
                .value;

        const message =
            document
                .getElementById("guestMessage")
                .value;


        /*
            Pour le moment les données
            sont récupérées ici.
        */

        console.log(
            "Confirmation de présence :",
            {
                nom: name,
                réponse: attendance,
                personnes: guests,
                message: message
            }
        );


        /*
            Cacher le formulaire
        */

        rsvpForm.style.display =
            "none";


        /*
            Afficher confirmation
        */

        successMessage.classList.add(
            "show"
        );

    }
);