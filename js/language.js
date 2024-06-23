// Declare and initialize the currentLanguage variable
var currentLanguage = "en";

// Function to toggle the language
function toggleLanguage() {
  // Get the language button element
  var logoNameIcon = document.getElementById("logoName-icon");

  // Toggle the current language
  if (currentLanguage === "en") {
    currentLanguage = "es";
    /* if (currentTheme == "dark") {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-light-es.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-dark-es.webp";
    } */

    // Actualizar contenido en español
    document.getElementById("homeTextNav").textContent = "Inicio";
    document.getElementById("aboutTextNav").textContent = "Sobre mí";
    document.getElementById("portfolioTextNav").textContent = "Portafolio";
    document.getElementById("contactTextNav").textContent = "Contacto";

    // Botón de idioma
    var language = document.querySelectorAll(".language-txt");
    language.forEach(function (element) {
      element.textContent = "EN";
    });

    // Bienvenida
    document.getElementById("WelcomeText").innerHTML =
      'Solamente <span class="highlight">hago aplicaciones</span> chidas para dispositivos <span class="highlight">Android</span>.';
    /* document.getElementById("WelcomeText").textContent =
      "Solamente hago aplicaciones chidas para dispositivos Android."; */
    document.getElementById("AboutMeText").textContent = "Sobre mí.";
    document.getElementById("AboutMeText00").textContent =
      "Yo mero, un desarrollador Android mexicano.";
    document.getElementById("AboutMeText01").textContent =
      "Hola, soy Daniel. Mi primera línea de código fue cuando tenía 13 años, y ahora, elfrikiamv es mi marca personal que utilizo en mis proyectos y en línea.";

    // Académico
    document.getElementById("coursesTxT").textContent = "Cursos.";
    document.getElementById("androidPathTxt").textContent =
      "Ruta de aprendizaje para el desarrollo de aplicaciones Android.";
    document.getElementById("androidPathTxt00").textContent =
      "Certificación de Platzi.com.";
    document.getElementById("AcademicTxt").textContent = "Educación académica.";
    document.getElementById("utcTxt").textContent =
      "Ingeniería en Sistemas Computacionales por la Universidad Tres Culturas (UTC), México.";
    var graduatedTxt = document.querySelectorAll("#graduatedTxt");
    graduatedTxt.forEach(function (element) {
      element.textContent = "Graduado.";
    });
    document.getElementById("cetisTxT").textContent =
      "Técnico en Programación por la Dirección General de Educación Tecnológica Industrial (DGETI), México.";

    // Habilidades
    document.getElementById("mySkillsText").textContent = "Mis habilidades.";
    document.getElementById("otherSkillsTxt").textContent =
      "Otras habilidades:";
    document.getElementById("designTxt").textContent = "Diseño.";

    var kotlinTxt = document.querySelectorAll("#kotlinTxt");
    kotlinTxt.forEach(function (element) {
      element.textContent = "Principal lenguaje en apps Android.";
    });

    var javaTxt = document.querySelectorAll("#javaTxt");
    javaTxt.forEach(function (element) {
      element.textContent = "Uso en desarrollo de apps Android.";
    });

    var androidSTxt = document.querySelectorAll("#androidSTxt");
    androidSTxt.forEach(function (element) {
      element.textContent = "IDE para desarrollar apps.";
    });

    var androidJetpackTxt = document.querySelectorAll("#androidJetpackTxt");
    androidJetpackTxt.forEach(function (element) {
      element.textContent = "Herramientas para apps Android.";
    });

    var xmlTxt = document.querySelectorAll("#xmlTxt");
    xmlTxt.forEach(function (element) {
      element.textContent = "Marcado para interfaces.";
    });

    var materialDesignTxt = document.querySelectorAll("#materialDesignTxt");
    materialDesignTxt.forEach(function (element) {
      element.textContent = "Guía de diseño de Google.";
    });

    var androidArchitectureTxt = document.querySelectorAll(
      "#androidArchitectureTxt"
    );
    androidArchitectureTxt.forEach(function (element) {
      element.textContent = "Arquitectura Android";
    });

    var androidArchitectureTxt00 = document.querySelectorAll(
      "#androidArchitectureTxt00"
    );
    androidArchitectureTxt00.forEach(function (element) {
      element.textContent = "Patrones de diseño Android.";
    });

    var figmaTxt = document.querySelectorAll("#figmaTxt");
    figmaTxt.forEach(function (element) {
      element.textContent = "Herramienta de diseño de interfaces.";
    });

    var androidApiTxt = document.querySelectorAll("#androidApiTxt");
    androidApiTxt.forEach(function (element) {
      element.textContent = "Interfaz para acceso al sistema.";
    });

    var firebaseTxt = document.querySelectorAll("#firebaseTxt");
    firebaseTxt.forEach(function (element) {
      element.textContent = "Plataforma móvil de Google.";
    });

    var gitTxt = document.querySelectorAll("#gitTxt");
    gitTxt.forEach(function (element) {
      element.textContent = "Seguimiento de cambios.";
    });

    var googlePlayTxt = document.querySelectorAll("#googlePlayTxt");
    googlePlayTxt.forEach(function (element) {
      element.textContent = "Publicación en tienda.";
    });

    var googlePlayTxt00 = document.querySelectorAll("#googlePlayTxt00");
    googlePlayTxt00.forEach(function (element) {
      element.textContent = "Gestión de apps en Play.";
    });

    // Portafolio
    document.getElementById("myProjects").textContent = "Mis proyectos.";
    document.getElementById("androidProjectsTxt").textContent =
      "Proyectos Android.";

    var btnMoreInfo = document.querySelectorAll("#btnMoreInfoTxt");

    btnMoreInfo.forEach(function (element) {
      element.textContent = "Saber más.";
    });

    document.getElementById("studentFolderTxt").textContent =
      "Administra y respalda archivos con Student_folder.";

    document.getElementById("pointSaleTxt").textContent =
      "Utiliza tu smartphone como punto de venta.";
    document.getElementById("superCouponsTxt").textContent =
      "Descubre cupones con Super_coupons.";
    var elements = document.querySelectorAll(".title-winProjects");

    elements.forEach(function (element) {
      element.textContent = "Proyectos para Windows.";
    });
    document.getElementById("windowsProjectsTxt").textContent =
      "Proyectos para Windows.";
    document.getElementById("launchModTxt").textContent =
      "Mejora tu experiencia en Minecraft.";
    document.getElementById("projectBackupTxt").textContent =
      "Salvaguarda tus datos con Project_backup.";
    document.getElementById("webTxt").textContent = "Proyectos web.";
    document.getElementById("elfrikiamvWebTxt").textContent =
      "Portafolio personal, muestra mis habilidades.";
    document.getElementById("shopWpTxt").textContent =
      "Envía tu lista de compras por WhatsApp.";
    document.getElementById("figmaProjectsTxt").textContent =
      "Proyectos en Figma.";
    document.getElementById("elfrikiamvFigmaTxt").textContent =
      "Diseño para elfrikiamv.tech en Figma.";
    document.getElementById("studentFolderFigmaTxt").textContent =
      "Diseño de interfaz para Student_folder en Figma.";

    // Contáctame
    document.getElementById("contactMe").textContent = "Contacto.";

    //document.getElementById("btnContactMeTxt").textContent = "Contáctame";
    var btnContactMe = document.querySelectorAll("#btnContactMeTxt");

    btnContactMe.forEach(function (element) {
      element.textContent = "Contáctame.";
    });
  } else {
    currentLanguage = "en";
    /* if (currentTheme == "light") {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-dark-en.webp";
    } else {
      logoNameIcon.src =
        "https://elfrikiamv.com/media/img/logo-elfrikiamv-dev-light-en.webp";
    } */

    // Actualizar contenido en inglés
    document.getElementById("homeTextNav").textContent = "Home";
    document.getElementById("aboutTextNav").textContent = "About me";
    document.getElementById("portfolioTextNav").textContent = "Portfolio";
    document.getElementById("contactTextNav").textContent = "Contact me";

    //button language
    var language = document.querySelectorAll(".language-txt");
    language.forEach(function (element) {
      element.textContent = "ES";
    });

    //welcome
    document.getElementById("WelcomeText").innerHTML =
      'I only <span class="highlight">make</span> cool <span class="highlight">apps</span> for <span class="highlight">Android</span> devices.';

    /* document.getElementById("WelcomeText").textContent =
      "I only make cool apps for Android devices."; */
    document.getElementById("AboutMeText").textContent = "About me.";
    document.getElementById("AboutMeText00").textContent = "I just.";
    document.getElementById("AboutMeText01").textContent =
      "Hello, I'm Daniel, a Mexican Android developer. My first line of code was when I was 13 years old, and now, elfrikiamv is my personal brand that I use in my projects and online.";

    //academic
    document.getElementById("coursesTxT").textContent = "Courses.";
    document.getElementById("androidPathTxt").textContent =
      "Android Application Development Learning Path.";
    document.getElementById("androidPathTxt00").textContent =
      "Certification from Platzi.com.";
    document.getElementById("AcademicTxt").textContent = "Academic education.";
    document.getElementById("utcTxt").textContent =
      "Computer Systems Engineering from the University of Three Cultures (UTC), México.";
    var graduatedTxt = document.querySelectorAll("#graduatedTxt");
    graduatedTxt.forEach(function (element) {
      element.textContent = "Graduated.";
    });
    document.getElementById("cetisTxT").textContent =
      "Programming Technician from the General Directorate of Industrial Technological Education (DGETI), México.";

    //skills
    document.getElementById("mySkillsText").textContent = "My Superpowers.";
    document.getElementById("otherSkillsTxt").textContent = "My other skills:";
    document.getElementById("designTxt").textContent = "Design.";

    var kotlinTxt = document.querySelectorAll("#kotlinTxt");
    kotlinTxt.forEach(function (element) {
      element.textContent = "Main for Android app development.";
    });

    var javaTxt = document.querySelectorAll("#javaTxt");
    javaTxt.forEach(function (element) {
      element.textContent = "Used in Android app development.";
    });

    var androidSTxt = document.querySelectorAll("#androidSTxt");
    androidSTxt.forEach(function (element) {
      element.textContent = "IDE for Android app development";
    });

    var androidJetpackTxt = document.querySelectorAll("#androidJetpackTxt");
    androidJetpackTxt.forEach(function (element) {
      element.textContent = "Toolkit for Android apps.";
    });

    var xmlTxt = document.querySelectorAll("#xmlTxt");
    xmlTxt.forEach(function (element) {
      element.textContent = "Markup for Android app interfaces.";
    });

    var materialDesignTxt = document.querySelectorAll("#materialDesignTxt");
    materialDesignTxt.forEach(function (element) {
      element.textContent = "Google's app design guide.";
    });

    var androidArchitectureTxt = document.querySelectorAll(
      "#androidArchitectureTxt"
    );
    androidArchitectureTxt.forEach(function (element) {
      element.textContent = "Android Architecture";
    });

    var androidArchitectureTxt00 = document.querySelectorAll(
      "#androidArchitectureTxt00"
    );
    androidArchitectureTxt00.forEach(function (element) {
      element.textContent = "Android design patterns.";
    });

    var figmaTxt = document.querySelectorAll("#figmaTxt");
    figmaTxt.forEach(function (element) {
      element.textContent = "Interface design tool.";
    });

    var androidApiTxt = document.querySelectorAll("#androidApiTxt");
    androidApiTxt.forEach(function (element) {
      element.textContent = "Interface for system access.";
    });

    var firebaseTxt = document.querySelectorAll("#firebaseTxt");
    firebaseTxt.forEach(function (element) {
      element.textContent = "Google's mobile app platform.";
    });

    var gitTxt = document.querySelectorAll("#gitTxt");
    gitTxt.forEach(function (element) {
      element.textContent = "Track code changes and collaborate.";
    });

    var googlePlayTxt = document.querySelectorAll("#googlePlayTxt");
    googlePlayTxt.forEach(function (element) {
      element.textContent = "Google Play publishing";
    });

    var googlePlayTxt00 = document.querySelectorAll("#googlePlayTxt00");
    googlePlayTxt00.forEach(function (element) {
      element.textContent = "Manage apps on Play.";
    });

    //portfolio
    document.getElementById("myProjects").textContent = "My projects.";
    document.getElementById("androidProjectsTxt").textContent =
      "Android projects.";

    //document.getElementById("btnMoreInfoTxt").textContent = "More info.";
    var btnMoreInfo = document.querySelectorAll("#btnMoreInfoTxt");

    btnMoreInfo.forEach(function (element) {
      element.textContent = "More info.";
    });

    document.getElementById("studentFolderTxt").textContent =
      "Manage and backup your files with Student_folder.";

    document.getElementById("pointSaleTxt").textContent =
      "Use your smartphone as a point of sale with pointSale.";
    document.getElementById("superCouponsTxt").textContent =
      "Discover amazing coupons with Super_coupons.";
    var elements = document.querySelectorAll(".title-winProjects");

    elements.forEach(function (element) {
      element.textContent = "Windows projects.";
    });
    document.getElementById("windowsProjectsTxt").textContent =
      "Windows projects.";
    document.getElementById("launchModTxt").textContent =
      "Improve your MC experience with Launch_mod.";
    document.getElementById("projectBackupTxt").textContent =
      "Safeguard your data with Project_backup.";
    document.getElementById("webTxt").textContent = "Website projects.";
    document.getElementById("elfrikiamvWebTxt").textContent =
      "Personal portfolio website, showcase your skills.";
    document.getElementById("shopWpTxt").textContent =
      "Send your shopping list via WhatsApp with Shop_wp.";
    document.getElementById("figmaProjectsTxt").textContent = "Figma projects.";
    document.getElementById("elfrikiamvFigmaTxt").textContent =
      "Design for elfrikiamv.tech in Figma.";
    document.getElementById("studentFolderFigmaTxt").textContent =
      "Interface design for Student_folder in Figma.";

    //contact me
    document.getElementById("contactMe").textContent = "Contact me.";
    //document.getElementById("btnContactMeTxt").textContent = "Contact me";
    var btnContactMe = document.querySelectorAll("#btnContactMeTxt");

    btnContactMe.forEach(function (element) {
      element.textContent = "Contact me.";
    });
  }
}
