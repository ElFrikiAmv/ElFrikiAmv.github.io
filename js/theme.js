// Declare and initialize the currentTheme variable
var currentTheme = "dark";

// Function to toggle the theme
function toggleTheme() {
  // Get the theme button element
  var body = document.body;
  var themeIcon = document.querySelectorAll(".theme-icon");
  var logoNameIcon = document.getElementById("logoName-icon");
  var logoIcon = document.querySelectorAll(".logo-icon");
  var navbar = document.querySelector(".navbar");

  // Toggle the current theme
  if (currentTheme === "dark") {
    if (currentLanguage === "en") {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-dark-en.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-dark-es.webp";
    }
    //update content
    currentTheme = "light";
    /* themeIcon.src = "https://elfrikiamv.com/media/img/light-mode.webp"; */
    themeIcon.forEach(function (element) {
      element.src = "https://elfrikiamv.com/media/img/light-mode.webp";
    });

    logoIcon.forEach(function (element) {
      element.src =
        "https://elfrikiamv.com/media/img/elfrikiamv-logo-light.webp";
    });

    navbar.setAttribute("data-bs-theme", "light");

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  } else {
    if (currentLanguage === "es") {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-light-es.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-light-en.webp";
    }
    //update content
    currentTheme = "dark";
    /* themeIcon.src = "https://elfrikiamv.com/media/img/night-mode.webp"; */
    themeIcon.forEach(function (element) {
      element.src = "https://elfrikiamv.com/media/img/night-mode.webp";
    });

    logoIcon.forEach(function (element) {
      element.src = "https://elfrikiamv.com/media/img/elfrikiamv-logo.webp";
    });

    navbar.setAttribute("data-bs-theme", "dark");

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
}
/* mobile back button */

function toBack() {
  // Oculta el contenido principal
  var mainContentElement = document.querySelector(".allContent");
  if (mainContentElement) {
    mainContentElement.style.display = "none";
  } else {
    console.error("Elemento de contenido principal no encontrado.");
  }

  // Muestra el contenido móvil
  var mobileContentElement = document.querySelector(".mobile-desktop");
  if (mobileContentElement) {
    mobileContentElement.style.display = "block";
  } else {
    console.error("Elemento de contenido móvil no encontrado.");
  }
}

function toBackWeb() {

  // Oculta el contenido móvil
  var mobileContentElement = document.querySelector(".mobile-desktop");
  if (mobileContentElement) {
    mobileContentElement.style.display = "none";
  } else {
    console.error("Elemento de contenido móvil no encontrado.");
  }

  // Muestra el contenido principal
  var mainContentElement = document.querySelector(".allContent");
  if (mainContentElement) {
    mainContentElement.style.display = "block";
  } else {
    console.error("Elemento de contenido principal no encontrado.");
  }

}
/* mobile back button */
