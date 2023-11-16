// Declare and initialize the currentLanguage variable
var currentLanguage = "en";

// Declare and initialize the currentTheme variable
var currentTheme = "dark";

// Function to toggle the theme
function toggleTheme() {
  // Get the theme button element
  var body = document.body;
  var themeIcon = document.getElementById("theme-icon");
  var logoNameIcon = document.getElementById("logoName-icon");
  var logoIcon = document.getElementById("logo-icon");
  /* var arrowUpIcon = document.getElementById("up-icon");
   */

  // Toggle the current theme
  if (currentTheme === "dark") {
    //update content
    currentTheme = "light";
    themeIcon.src = "https://i.postimg.cc/XqxHNHrj/light-mode.webp";
    logoNameIcon.src =
      "https://i.postimg.cc/T20Rcv7N/logo-Elfrikiamv-Dev-Light.png";
    logoIcon.src = "/img/use/elfrikiamv-logo-light.ico";
    /* arrowUpIcon.src = "https://donfriki.000webhostapp.com/img/up-light.png";
      
       */

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  } else {
    //update content
    currentTheme = "dark";
    themeIcon.src = "https://i.postimg.cc/mZS6SD8v/night-mode.webp";
    logoNameIcon.src = "https://i.postimg.cc/G9nhN4SK/logo-Elfrikiamv-Dev.png";
    logoIcon.src = "/img/use/elfrikiamv-logo.ico";
    /* arrowUpIcon.src = "https://donfriki.000webhostapp.com/img/up-night.png";
      ;
       */

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
}
