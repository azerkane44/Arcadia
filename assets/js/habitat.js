document.addEventListener('DOMContentLoaded', function() {
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

    // Fonction d'initialisation d'un habitat pour le slider
    function initHabitat(habitatId) {
        // Initial display of the first slide
        showSlide(habitatId, 0);

        // Écouteur d'événements pour les boutons de navigation
        document.querySelector(`#${habitatId} .next`).addEventListener('click', function() {
            nextSlide(habitatId);
        });

        document.querySelector(`#${habitatId} .prev`).addEventListener('click', function() {
            prevSlide(habitatId);
        });

        // Écouteur d'événement pour chaque image
        document.querySelectorAll(`#${habitatId} .habitat-image`).forEach(image => {
            image.addEventListener('click', function() {
                const descriptionDiv = document.getElementById(`deschabitat-${habitatId.split('-')[1]}`);
                if (descriptionDiv.style.display === 'none' || descriptionDiv.style.display === '') {
                    descriptionDiv.style.display = 'block';
                    const slideIndex = [...this.parentNode.parentNode.children].indexOf(this.parentNode);
                    showSlide(habitatId, slideIndex);
                } else {
                    descriptionDiv.style.display = 'none';
                }
            });
        });
    }

    // Initialisation de chaque habitat dans l'objet habitats
    for (const habitatId in habitats) {
        initHabitat(habitatId);
    }
});
