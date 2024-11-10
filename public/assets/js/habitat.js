document.addEventListener('DOMContentLoaded', function() {
    // Configuration des données pour chaque habitat
    const habitats = {
        "habitat-jungle": {
            titres: ["Jungle ", "Tigre", "gorille", "Léopard", "Orang-outan"],
            descriptions: [
                "Nom : Jungle Tropicale<br>Description : Cet habitat est caractérisé par une végétation dense, un climat humide et abrite une grande diversité d'animaux.",
                "Prénom : Izem<br>Race : Tigre malais<br>Habitat : Jungle",
                "Prénom : King<br>Race : Gorille de l'ouest<br>Habitat : Jungle",
                "Prénom : Simba<br>Race : Léopard Panthera pardus <br>Habitat : Jungle",
                "Prénom : Silverback<br>Race : Orang-outan Bornéo<br>Habitat : Jungle"
            ],
            extraText: [
                "Animaux présents : Tigre, Gorille, Léopard, Orang-outan",
                "Ce tigre est réputé pour son caractère joueur.",
                "Ce gorille est l'un des plus redoutables prédateurs.",
                "Ce Léopard est connu pour son intelligence et son agilité.",
                "Cette Orang-outan est le roi incontesté de la jungle."
            ]
        },

        "habitat-foret": {
            titres: ["Arctique", "Loup", "Renard", "Phoque", "Ours"],
            descriptions: [
                "Nom : Arctique<br>Description : Cet habitat est marqué par des étendues glacées, des glaciers imposants et une faune résiliente qui s'adapte aux rigueurs du froid polaire.",
                "Prénom : volk<br>Race : Loup polaire <br>Habitat : Arctique",
                "Prénom : Fox<br>Race : Renard arctique <br>Habitat : Arctique",
                "Prénom : seal<br>Race : Phoque du Groenlandbr>Habitat : Arctique",
                "Prénom : Mighty Joe<br>Race :Ours polaire<br>Habitat : Arctique"
            ],
            extraText: [
                "Animaux présents : Loup, Renard, Phoque, Ours",
                "Ce Loup est connu pour sa force redoutable.",
                "Ce Renard est une espèce menacée.",
                "Ce Phoque adore explorer les profondeurs des eaux.",
                "Cette Ours est un protecteur du groupe."
            ]
        },
        "habitat-savane": {
            titres: ["Savane ", "Lion", "Girafe", "Zèbre", "Rhinocéros"],
            descriptions: [
                "Nom : Savane Africaine<br>Description : Vastes étendues herbeuses, cet habitat abrite les plus grands herbivores et prédateurs du monde.",
                "Prénom : Simba<br>Race : Lion d'Afrique<br>Habitat : Savane",
                "Prénom : kaizen<br>Race :  Girafe Masai<br>Habitat : Savane",
                "Prénom : Marty<br>Race : Zèbre des plaines<br>Habitat : Savane",
                "Prénom : Melman<br>Race :Rhinocéros  simum<br>Habitat : Savane"
            ],
            extraText: [
                "Animaux présents : Lions, Éléphants, Zèbres, Girafes",
                "Ce lion est le roi de la savane.",
                "Cette girafe est un symbole de sagesse.",
                "Ce zèbre est connu pour ses rayures uniques.",
                "Ce rhinocéros est  grand herbivore avec une peau épaisse."
            ]
        },
        "habitat-ocean": {
            titres: ["Océan ", "Dauphins", "Requins", "Méduses", "Tortues"],
            descriptions: [
                "Nom : Océan Pacifique<br>Description : Un vaste écosystème marin avec une vie marine diversifiée, des eaux profondes aux récifs coralliens colorés.",
                "Prénom : Flipper<br>Race : Dauphin Commun<br>Habitat : Océan",
                "Prénom : Jaws<br>Race : Grand Requin Blanc<br>Habitat : Océan",
                "Prénom : Nemo<br>Race : Méduse<br>Habitat : Océan",
                "Prénom : Crush<br>Race : Tortue Luth<br>Habitat : Océan"
            ],
            extraText: [
                "Animaux présents : Dauphins, Requins, Méduses, Tortues",
                "Ce dauphin est très sociable et joueur.",
                "Ce requin est un redoutable prédateur des océans.",
                "Ce Méduse est célèbre pour sa couleur bleu claire.",
                "Cette tortue parcourt des milliers de kilomètres chaque année."
            ]
        }
    };

    // Fonction pour afficher le slide courant
    function showSlide(habitatId, index) {
        const slides = document.querySelectorAll(`#${habitatId} .slider .slide`);
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        // Mise à jour du titre et des descriptions avec des sauts de ligne
        document.getElementById(`titre-habitat-${habitatId.split('-')[1]}`).innerHTML = habitats[habitatId].titres[index];
        document.getElementById(`description-text-${habitatId.split('-')[1]}`).innerHTML = habitats[habitatId].descriptions[index];
        document.getElementById(`extra-text-${habitatId.split('-')[1]}`).innerHTML = habitats[habitatId].extraText[index];
    }

    // Fonction pour gérer le clic sur le bouton suivant
    function nextSlide(habitatId) {
        const slides = document.querySelectorAll(`#${habitatId} .slider .slide`);
        const totalSlides = slides.length;
        let currentSlide = [...slides].findIndex(slide => slide.classList.contains('active'));
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(habitatId, currentSlide);
    }

    // Fonction pour gérer le clic sur le bouton précédent
    function prevSlide(habitatId) {
        const slides = document.querySelectorAll(`#${habitatId} .slider .slide`);
        const totalSlides = slides.length;
        let currentSlide = [...slides].findIndex(slide => slide.classList.contains('active'));
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(habitatId, currentSlide);
    }

    // Écouteurs d'événements pour chaque image
    document.querySelectorAll('.habitat-image').forEach(image => {
        image.addEventListener('click', function() {
            const habitatId = this.getAttribute('data-habitat');
            const descriptionDiv = document.getElementById(`deschabitat-${habitatId.split('-')[1]}`);

            // Afficher ou masquer la div deschabitat
            if (descriptionDiv.style.display === 'none' || descriptionDiv.style.display === '') {
                descriptionDiv.style.display = 'block';
                const slideIndex = [...this.parentNode.parentNode.children].indexOf(this.parentNode); // Indice de l'image cliquée
                showSlide(habitatId, slideIndex); // Affiche la première image et description
            } else {
                descriptionDiv.style.display = 'none';
            }
        });
    });

    // Écouteurs d'événements pour les boutons de navigation
    document.querySelectorAll('.next').forEach(nextBtn => {
        nextBtn.addEventListener('click', function() {
            const habitatId = this.parentNode.parentNode.id; // Récupérer l'ID du habitat
            nextSlide(habitatId);
        });
    });

    document.querySelectorAll('.prev').forEach(prevBtn => {
        prevBtn.addEventListener('click', function() {
            const habitatId = this.parentNode.parentNode.id; // Récupérer l'ID du habitat
            prevSlide(habitatId);
        });
    });

    // Initial display of the first slide for each habitat
    for (const habitatId in habitats) {
        showSlide(habitatId, 0);
    }
});