// Declare and initialize the currentTheme variable
var currentTheme = "dark";

// Function to toggle the theme
function toggleTheme() {
  // Get the theme button element
  var body = document.body;
  var themeIcon = document.getElementById("theme-icon");
  var logoNameIcon = document.getElementById("logoName-icon");
  var logoIcon = document.querySelectorAll(".logo-icon");
  var navbar = document.querySelector(".navbar");

  // Toggle the current theme
  if (currentTheme === "dark") {
    if (currentLanguage === "en") {
      logoNameIcon.src =
        "https://elfrikiamv.com/img/use/logo-elfrikiamv-dev-dark-en.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/img/use/logo-elfrikiamv-dev-dark-es.webp";
    }
    //update content
    currentTheme = "light";
    themeIcon.src = "https://i.postimg.cc/XqxHNHrj/light-mode.webp";

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
        "https://elfrikiamv.com/img/use/logo-elfrikiamv-dev-light-es.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/img/use/logo-elfrikiamv-dev-light-en.webp";
    }
    //update content
    currentTheme = "dark";
    themeIcon.src = "https://i.postimg.cc/mZS6SD8v/night-mode.webp";

    logoIcon.forEach(function (element) {
      element.src = "https://elfrikiamv.com/media/img/elfrikiamv-logo.webp";
    });

    navbar.setAttribute("data-bs-theme", "dark");

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
}
