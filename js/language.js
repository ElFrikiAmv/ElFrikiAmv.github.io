// Declare and initialize the currentLanguage variable
var currentLanguage = "en";

// Function to toggle the language
function toggleLanguage() {
  // Get the language button element
  var logoNameIcon = document.getElementById("logoName-icon");

  // Toggle the current language
  if (currentLanguage === "en") {
    currentLanguage = "es";
    logoNameIcon.src = "https://i.postimg.cc/0jsfdrH7/logo-Elfrikiamv-Dev.webp";

    // Actualizar contenido en español
    document.getElementById("homeTextNav").textContent = "Inicio";
    document.getElementById("aboutTextNav").textContent = "Acerca";
    document.getElementById("portfolioTextNav").textContent = "Portafolio";
    document.getElementById("contactTextNav").textContent = "Contacto";

    // Botón de idioma
    document.getElementById("language-txt").textContent = "EN";

    // Bienvenida
    document.getElementById("WelcomeText").textContent =
      "Creo apps geniales para Android.";
    document.getElementById("btnWelcomeScrollToContact").textContent =
      "Contactar";
    document.getElementById("AboutMeText").textContent = "Sobre mí.";
    document.getElementById("AboutMeText00").textContent =
      "Hola, soy Daniel, un desarrollador de Android.";
    document.getElementById("AboutMeText01").textContent =
      "Mi primera línea de código fue a los 13 años. elfrikiamv es mi marca para proyectos en línea.";

    // Académico
    document.getElementById("coursesTxT").textContent = "Cursos.";
    document.getElementById("androidPathTxt").textContent =
      "Desarrollo de Aplicaciones Android.";
    document.getElementById("androidPathTxt00").textContent =
      "Certificación Platzi.com.";
    document.getElementById("AcademicTxt").textContent = "Educación.";
    document.getElementById("utcTxt").textContent =
      "Ingeniería en Sistemas Computacionales, UTC, México.";
    document.getElementById("graduatedTxt").textContent = "Graduado.";
    document.getElementById("cetisTxT").textContent =
      "Técnico en Programación, CETIS, México.";

    // Habilidades
    document.getElementById("mySkillsText").textContent = "Habilidades.";
    document.getElementById("otherSkillsTxt").textContent =
      "Otras habilidades:";
    document.getElementById("designTxt").textContent = "Diseño.";
    document.getElementById("kotlinTxt").textContent =
      "Desarrollo principal de apps Android.";
    document.getElementById("javaTxt").textContent =
      "Uso en desarrollo de apps Android.";
    document.getElementById("androidSTxt").textContent =
      "IDE para desarrollo Android.";
    document.getElementById("androidJetpackTxt").textContent =
      "Herramientas para apps Android.";
    document.getElementById("xmlTxt").textContent =
      "Marcado para interfaces Android.";
    document.getElementById("materialDesignTxt").textContent =
      "Guía de diseño de Google.";
    document.getElementById("androidArchitectureTxt").textContent =
      "Arquitectura Android.";
    document.getElementById("androidArchitectureTxt00").textContent =
      "Patrones de diseño Android.";
    document.getElementById("designPatternsTxt").textContent =
      "Patrones de diseño";
    document.getElementById("designPatternsTxt00").textContent =
      "Soluciones a problemas de software.";
    document.getElementById("androidApiTxt").textContent =
      "Interfaz para acceso al sistema.";
    document.getElementById("firebaseTxt").textContent =
      "Plataforma móvil de Google.";
    document.getElementById("gitTxt").textContent =
      "Seguimiento de cambios y colaboración.";
    document.getElementById("googlePlayTxt").textContent =
      "Publicación en Google Play";
    document.getElementById("googlePlayTxt00").textContent =
      "Gestión de apps en Play.";

    // Portafolio
    document.getElementById("myProjects").textContent = "Proyectos.";
    document.getElementById("androidProjectsTxt").textContent =
      "Proyectos Android.";

    document.getElementById("btnMoreInfoTxt").textContent = "Más Info.";
    document.getElementById("studentFolderTxt").textContent =
      "Administra y respalda archivos con Student_folder.";

    document.getElementById("superCouponsTxt").textContent =
      "Descubre cupones con Super_coupons.";

    document.getElementById("randomImageTxt").textContent =
      "Descubre imágenes con Random_image.";
    document.getElementsByClassName("title-winProjects").textContent =
      "Proyectos Windows.";
    document.getElementById("windowsProjectsTxt").textContent =
      "Proyectos Windows.";
    document.getElementById("launchModTxt").textContent =
      "Mejora tu experiencia en Minecraft con Launch_mod.";
    document.getElementById("projectBackupTxt").textContent =
      "Salvaguarda tus datos con Project_backup.";
    document.getElementById("webTxt").textContent = "Proyectos web.";
    document.getElementById("elfrikiamvWebTxt").textContent =
      "Portafolio personal, muestra tus habilidades.";
    document.getElementById("shopWpTxt").textContent =
      "Envía tu lista de compras por WhatsApp con Shop_wp.";
    document.getElementById("figmaProjectsTxt").textContent =
      "Proyectos en Figma.";
    document.getElementById("elfrikiamvFigmaTxt").textContent =
      "Diseño para elfrikiamv.tech en Figma.";
    document.getElementById("studentFolderFigmaTxt").textContent =
      "Diseño de interfaz para Student_folder en Figma.";

    // Contáctame
    document.getElementById("contactMe").textContent = "Contacto.";
    document.getElementById("btnContactMeTxt").textContent = "Contáctame";
  } else {
    currentLanguage = "en";
    logoNameIcon.src = "https://i.postimg.cc/0jsfdrH7/logo-Elfrikiamv-Dev.webp";

    // Actualizar contenido en inglés
    document.getElementById("homeTextNav").textContent = "Home";
    document.getElementById("aboutTextNav").textContent = "About me";
    document.getElementById("portfolioTextNav").textContent = "Portfolio";
    document.getElementById("contactTextNav").textContent = "Contact me";

    //button language
    document.getElementById("language-txt").textContent = "ES";

    //welcome
    document.getElementById("WelcomeText").textContent =
      "I only make cool apps for Android devices.";
    document.getElementById("btnWelcomeScrollToContact").textContent =
      "Get in touch";
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
    document.getElementById("graduatedTxt").textContent = "Graduated.";
    document.getElementById("cetisTxT").textContent =
      "Programming Technician from the Center for Technological and Industrial Services Studies (CETIS), México.";

    //skills
    document.getElementById("mySkillsText").textContent = "My skills.";
    document.getElementById("otherSkillsTxt").textContent = "My other skills:";
    document.getElementById("designTxt").textContent = "Design.";
    document.getElementById("kotlinTxt").textContent =
      "Main for Android app development.";
    document.getElementById("javaTxt").textContent =
      "Used in Android app development.";
    document.getElementById("androidSTxt").textContent =
      "IDE for Android app development.";
    document.getElementById("androidJetpackTxt").textContent =
      "Toolkit for Android apps.";
    document.getElementById("xmlTxt").textContent =
      "Markup for Android app interfaces.";
    document.getElementById("materialDesignTxt").textContent =
      "Google's app design guide.";
    document.getElementById("androidArchitectureTxt").textContent =
      "Android Architecture.";
    document.getElementById("androidArchitectureTxt00").textContent =
      "Android design patterns.";
    document.getElementById("designPatternsTxt").textContent =
      "Design Patterns";
    document.getElementById("designPatternsTxt00").textContent =
      "Solutions for software problems.";
    document.getElementById("androidApiTxt").textContent =
      "Interface for system access.";
    document.getElementById("firebaseTxt").textContent =
      "Google's mobile app platform.";
    document.getElementById("gitTxt").textContent =
      "Track code changes and collaborate.";
    document.getElementById("googlePlayTxt").textContent =
      "Google Play publishing";
    document.getElementById("googlePlayTxt00").textContent =
      "Manage apps on Play.";

    //portfolio
    document.getElementById("myProjects").textContent = "My projects.";
    document.getElementById("androidProjectsTxt").textContent =
      "Android projects.";

    document.getElementById("btnMoreInfoTxt").textContent = "More info.";
    document.getElementById("studentFolderTxt").textContent =
      "Manage and backup your files with Student_folder.";

    document.getElementById("superCouponsTxt").textContent =
      "Discover amazing coupons with Super_coupons.";

    document.getElementById("randomImageTxt").textContent =
      "Discover random images with Random_image.";
    document.getElementsByClassName("title-winProjects").textContent =
      "Windows projects.";
    document.getElementById("windowsProjectsTxt").textContent =
      "Windows projects.";
    document.getElementById("launchModTxt").textContent =
      "Improve your minecraft experience with Launch_mod.";
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
    document.getElementById("btnContactMeTxt").textContent = "Contact me";
  }
}
