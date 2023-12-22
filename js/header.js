let header = document.querySelector("#header");
header.addEventListener("click", () => {
    header.classList.toggle("navOver")
});



// -------------TEXT APPARAIT FUR ET A MESURE----------
const titleElement = document.getElementById('animatedTitle');
const text = "Bonjour et bienvenue sur mon Portfolio";

function animateTitle() {
    let index = 0;

    function addLetter() {
        titleElement.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(addLetter, Math.floor(Math.random() * (150 - 80 )) + 80) // Ajoute une lettre entre 150 et 80 miliseconde
        } else {
            // La boucle est terminé et on rappelle la fonction
            setTimeout(() => {
                delLetter()
            }, 1500);
        }
    }

    function delLetter(){
        titleElement.textContent = text.slice(0, index);
        index--;

        if (index >= 0) {
            setTimeout(delLetter, Math.floor(Math.random() * (150 - 80 )) + 80) // Ajoute une lettre entre 150 et 80 miliseconde
        } else {
            // La boucle est terminé et on rappelle la fonction animation
            setTimeout(() => {
                index = 0;
                animateTitle();
            }, 1500); // temps d'attente avant la répétition (en millisecondes)
        }
    }

    addLetter();
}

animateTitle();