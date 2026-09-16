const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});

// =========================
// Image Lightbox
// =========================

const clickableImages = document.querySelectorAll(
    ".gallery-image, .support-image"
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

clickableImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");
    });

});

lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});