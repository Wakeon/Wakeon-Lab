// 1.Récuper le bouton hamburger
const menuToggle = document.getElementById("menu-toggle");

// 2. Récuperer le contenu du menu
const navContent = document.getElementById("nav-content");

// 3. Ecouter le clic sur le boutn 
menuToggle.addEventListener("click", function() {
    // Add ou retirer la classe is-open
    navContent.classList.toggle("is-open");

    // Vérifier si le menu est ouvert 
    const isOpen = navContent.classList.contains("is-open");

    //Actualiser l'etat du bouton
    menuToggle.setAttribute("aria-expanded", isOpen);

    // atualiser son intitulé accessible
    menuToggle.setAttribute(
        "aria-label",
    isOpen? "Fermer le menu" : "Ouvrir le menu");
}

);


// ===================== POPULAR COURSES ==========================

const courseGrid = document.getElementById("course-grid");

function displayCourses() {

    courses.forEach(function(course) {

        const courseCard = `
            <article class="course-card">

                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>

                <div class="course-content">
                    <span class="course-category">
                        ${course.category}
                    </span>

                    <h3>${course.title}</h3>

                    <p>Instructor: ${course.instructor}</p>

                    <div class="course-info">
                        <span>${course.duration}</span>
                        <strong>$${course.price}</strong>
                    </div>

                    <a href="courses.html">Discover course</a>
                </div>

            </article>
        `;

        courseGrid.innerHTML += courseCard;

    });
}

displayCourses();