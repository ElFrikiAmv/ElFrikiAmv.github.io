// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Initialize smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

// Initialize AOS
AOS.init({
  once: true,
});

// Declare and initialize the currentLanguage variable
var currentLanguage = "en";

// Declare and initialize the currentTheme variable
var currentTheme = "dark";

// Function to toggle the language
function toggleLanguage() {
  // Get the language button element
  var languageIcon = document.getElementById("language-icon");

  // Toggle the current language
  if (currentLanguage === "en") {
    currentLanguage = "es";
    languageIcon.src = "https://donfriki.000webhostapp.com/img/flag-mx.png";

    // Actualizar contenido en inglés
    document.getElementById("homeTextNav").textContent = "Home";
    document.getElementById("aboutTextNav").textContent = "About me";
    document.getElementById("portfolioTextNav").textContent = "Portfolio";
    document.getElementById("contactTextNav").textContent = "Contact me";

    //welcome
    document.getElementById("WelcomeText").textContent =
      "I'm an Android programmer. I specialize in creating high-quality, user-friendly Android applications that meet the needs of my clients.";
    document.getElementById("contactButtonText").textContent = "Contact me";
    document.getElementById("AboutMeText").textContent = "About me.";
    document.getElementById("AboutMeText01").textContent =
      "Hello! I'm elfrikiamv, a Mexican Android developer with a passion for technology.";
    document.getElementById("AboutMeText02").textContent =
      "In addition to my love for programming, I have several interests that keep me balanced. One of them is my love for pizza; it's hard to resist a good slice of melted cheese. I also find great peace and a sense of connection with nature in forests. Exploring trails and breathing fresh air provides me with a rejuvenating escape from everyday life.";
    document.getElementById("AboutMeText03").textContent =
      "The name elfrikiamv initially emerged as my nickname in the gaming world, but it has since transformed into my personal brand. I identify with that name and use it in my projects and online presence.";

    //skills
    document.getElementById("mySkillsText").textContent = "My skills";
    document.getElementById("cardKotlinText").textContent =
      "Primary programming language used in Android application development.";
    document.getElementById("cardJavaText").textContent =
      "Programming language used in Android application development.";
    document.getElementById("cardASText").textContent =
      "Official IDE (Integrated Development Environment) for Android, providing a platform for application development and debugging.";
    document.getElementById("cardXMLText").textContent =
      "Markup language used to design the user interface of Android applications.";
    document.getElementById("cardAAText").textContent =
      "Recommended patterns and practices for designing Android applications.";
    document.getElementById("cardDPText").textContent =
      "Proven solutions for common problems in software development.";
    document.getElementById("cardAPIText").textContent =
      "Application programming interface that allows developers to access functions of the operating system.";
    document.getElementById("cardFirebaseText").textContent =
      "Google's mobile application development platform that provides tools and services for developing and enhancing applications.";
    document.getElementById("cardGitText").textContent =
      "Version control system used to manage the source code of applications and maintain a record of versions.";
    document.getElementById("cardGPText").textContent =
      "Registration process and technical and content requirements necessary to publish an application on the official Android app store.";

    //academic
    document.getElementById("academicTrainingText").textContent =
      "Academic training";
    document.getElementById("academicPlatziText").textContent =
      "ANDROID APPLICATION DEVELOPMENT";
    document.getElementById("academicPlatziText01").textContent =
      "Completed the Android Application Development Learning Path certification from Platzi.com.";
    document.getElementById("cSEText").textContent =
      "COMPUTER SYSTEMS ENGINEERING";
    document.getElementById("cSEText01").textContent =
      "Graduated with a Bachelor's degree in Computer Systems Engineering from the University of Three Cultures (UTC), México.";
    document.getElementById("pTText").textContent = "PROGRAMMING TECHNICIAN";
    document.getElementById("pTText01").textContent =
      "Graduated as a Programming Technician from the Center for Technological and Industrial Services Studies (CETIS), México.";

    //portfolio
    document.getElementById("myPortfolioText").textContent = "My portfolio.";
    document.getElementById("myPortfolioText01").textContent =
      "My web portfolio is a showcase of my experience and skills in developing mobile apps among other platforms. It includes a variety of standout projects, such as a mobile application for managing and backing up files to the cloud, a Minecraft launcher project with mod installation, and a website for sending shopping lists via WhatsApp.";
    document.getElementById("myPortfolioText02").textContent =
      "By utilizing technologies like Kotlin, Java, Visual Basic .NET, HTML, JS, CSS, and JSON, I demonstrate my ability to adapt to different programming languages and technologies. Additionally, I have worked with various architectures such as MVC, MVP, and MVVM, showcasing my knowledge in creating well-structured and scalable software.";
    document.getElementById("myPortfolioText03").textContent =
      "My portfolio also highlights my focus on user experience, showcasing attractive and user-friendly interfaces in my projects.";

    //projects
    document.getElementById("myProjects").textContent = "My projects";
    document.getElementById("myProjects01").textContent =
      "Development for Android mobile";
    document.getElementById("myProjects02").textContent =
      "Development for Windows 10/11";
    document.getElementById("myProjects03").textContent =
      "Development for web pages";
    document.getElementById("btnGo").textContent = "Go";
    document.getElementById("btnGo01").textContent = "Go";
    document.getElementById("btnGo02").textContent = "Go";

    //android platform
    document.getElementById("android-projects").textContent =
      "Android projects";
    document.getElementById("androidProjectsSF").textContent =
      "This is a mobile application for Android 10 devices that allows students to manage and backup files to the cloud.";
    document.getElementById("androidProjectsSF01").textContent =
      "It was built with Kotlin, Java, and the Google Drive API. It features an attractive user interface in both dark and light mode.";
    document.getElementById("androidProjectsSF02").textContent =
      "The application is practical and secure, providing an efficient solution for students' file management needs.";
    document.getElementById("btnMoreInfo").textContent = "More information";
    document.getElementById("btnMoreInfo01").textContent = "More information";
    document.getElementById("btnMoreInfo02").textContent = "More information";
    document.getElementById("btnMoreInfo03").textContent = "More information";
    document.getElementById("btnMoreInfo04").textContent = "More information";
    document.getElementById("btnMoreInfo05").textContent = "More information";

    document.getElementById("androidProjectsSC").textContent =
      "Super_coupons is an Android 10 mobile application that allows users to view coupons from the website (https://linkmydeals.com/) using ApiService Retrofit.";
    document.getElementById("androidProjectsSC01").textContent =
      "The project was built using Kotlin and utilizes the MVC, MVP, and MVVM architectures. The user interface is attractive and easy to use.";
    document.getElementById("androidProjectsRI").textContent =
      "In this Android 10 mobile application, users can view random images from the website https://picsum.photos/ by tapping on the displayed image.";
    document.getElementById("androidProjectsRI01").textContent =
      "The app is built using Kotlin, Lifecycle, and Androidx technologies and provides a smooth user experience. With an attractive user interface, the app allows users to easily view high-quality images with a simple tap.";

    //windows platform
    document.getElementById("windows-projects").textContent =
      "Windows projects";
    document.getElementById("windowsProjectsPB").textContent =
      "Is a Visual Basic .NET project designed to copy important directories to another location.";
    document.getElementById("windowsProjectsPB01").textContent =
      "It provides a reliable solution for backing up critical data to ensure its safety in case of file loss or corruption.";
    document.getElementById("windowsProjectsLM").textContent =
      "Launch_mod is a Visual Basic .NET project that serves as a launcher for Minecraft and allows for the installation of a mod pack.";
    document.getElementById("windowsProjectsLM01").textContent =
      "The project features an intuitive interface for easy installation and management of mods, enabling a customized gaming experience in Minecraft.";

    //web platform
    document.getElementById("web-projects").textContent = "Website projects";
    document.getElementById("websiteProjectsMW").textContent =
      "This project is a custom portfolio website designed using HTML, CSS, and JavaScript. It includes sections such as welcome, skills, projects, and contact.";
    document.getElementById("websiteProjectsMW01").textContent =
      "It stands out for its ability to switch between English and Spanish languages, as well as offering the option to switch between dark and light themes.";
    document.getElementById("websiteProjectsSW").textContent =
      "This web project allows users to send their shopping list via WhatsApp messages. Built with HTML, JS, CSS, and JSON, it features an easy-to-use and attractive user interface.";
    document.getElementById("websiteProjectsSW01").textContent =
      "Users can create their shopping list on the site and send it directly through WhatsApp messages.";

    //contact me
    document.getElementById("contactMe").textContent = "Contact me.";
    document.getElementById("contactMeEmail").textContent =
      "Need help with mobile app development? Contact me via email to collaborate on your next project.";
    document.getElementById("contactMeLinkedIn").textContent =
      "Connect with me on LinkedIn to see my experience in mobile app development. If you're looking for an Android developer for your next project, let me know via my profile.";
    document.getElementById("btnContactMeLinkedIn").textContent = "My linkedIn";
    document.getElementById("contactMeGitHub").textContent =
      "Check out my GitHub profile to see my mobile app development projects. If you're interested in working together, feel free to contact me through my profile.";
    document.getElementById("btnContactMeGitHub").textContent = "My github";
  } else {
    currentLanguage = "en";
    languageIcon.src = "https://donfriki.000webhostapp.com/img/flag-usa.png";

    // Actualizar contenido en español
    document.getElementById("homeTextNav").textContent = "Inicio";
    document.getElementById("aboutTextNav").textContent = "Sobre mí";
    document.getElementById("portfolioTextNav").textContent = "Portafolio";
    document.getElementById("contactTextNav").textContent = "Contáctame";

    //welcome
    document.getElementById("WelcomeText").textContent =
      "Soy un programador de Android. Me especializo en crear aplicaciones Android de alta calidad y fáciles de usar que satisfacen las necesidades de mis clientes.";
    document.getElementById("contactButtonText").textContent = "Contáctame";
    document.getElementById("AboutMeText").textContent = "Sobre mí.";
    document.getElementById("AboutMeText01").textContent =
      "¡Hola! Soy elfrikiamv, un desarrollador de Android mexicano con pasión por la tecnología.";
    document.getElementById("AboutMeText02").textContent =
      "Además de mi amor por la programación, tengo varios intereses que me mantienen equilibrado. Uno de ellos es mi amor por la pizza; es difícil resistirse a una buena rebanada de queso derretido. También encuentro una gran paz y una sensación de conexión con la naturaleza en los bosques. Explorar senderos y respirar aire fresco me proporciona un escape rejuvenecedor de la vida cotidiana.";
    document.getElementById("AboutMeText03").textContent =
      "El nombre elfrikiamv surgió inicialmente como mi apodo en el mundo de los videojuegos, pero desde entonces se ha convertido en mi marca personal. Me identifico con ese nombre y lo uso en mis proyectos y presencia en línea.";

    //skills
    document.getElementById("mySkillsText").textContent = "Mis habilidades";
    document.getElementById("cardKotlinText").textContent =
      "Lenguaje de programación principal utilizado en el desarrollo de aplicaciones Android.";
    document.getElementById("cardJavaText").textContent =
      "Lenguaje de programación utilizado en el desarrollo de aplicaciones Android.";
    document.getElementById("cardASText").textContent =
      "Entorno de desarrollo integrado (IDE, por sus siglas en inglés) oficial para Android, que proporciona una plataforma para el desarrollo y depuración de aplicaciones.";
    document.getElementById("cardXMLText").textContent =
      "Lenguaje de marcado utilizado para diseñar la interfaz de usuario de las aplicaciones Android.";
    document.getElementById("cardAAText").textContent =
      "Patrones y prácticas recomendadas para el diseño de aplicaciones Android.";
    document.getElementById("cardDPText").textContent =
      "Soluciones probadas para problemas comunes en el desarrollo de software.";
    document.getElementById("cardAPIText").textContent =
      "Interfaz de programación de aplicaciones que permite a los desarrolladores acceder a funciones del sistema operativo.";
    document.getElementById("cardFirebaseText").textContent =
      "Plataforma de desarrollo de aplicaciones móviles de Google que proporciona herramientas y servicios para desarrollar y mejorar aplicaciones.";
    document.getElementById("cardGitText").textContent =
      "Sistema de control de versiones utilizado para gestionar el código fuente de las aplicaciones y mantener un registro de las versiones.";
    document.getElementById("cardGPText").textContent =
      "Proceso de registro y requisitos técnicos y de contenido necesarios para publicar una aplicación en la tienda oficial de aplicaciones de Android.";

    //academic
    document.getElementById("academicTrainingText").textContent =
      "Formación académica";
    document.getElementById("academicPlatziText").textContent =
      "DESARROLLO DE APLICACIONES ANDROID";
    document.getElementById("academicPlatziText01").textContent =
      "Completé la certificación de la Ruta de Aprendizaje de Desarrollo de Aplicaciones Android en Platzi.com.";

    document.getElementById("cSEText").textContent =
      "INGENIERÍA DE SISTEMAS COMPUTACIONALES";
    document.getElementById("cSEText01").textContent =
      "Graduado con una licenciatura en Ingeniería de Sistemas Computacionales de la Universidad de las Tres Culturas (UTC), México.";
    document.getElementById("pTText").textContent = "TÉCNICO EN PROGRAMACIÓN";
    document.getElementById("pTText01").textContent =
      "Graduado como Técnico en Programación del Centro de Estudios Tecnológicos y de Servicios Industriales (CETIS), México.";

    //portfolio
    document.getElementById("myPortfolioText").textContent = "Mi portafolio.";
    document.getElementById("myPortfolioText01").textContent =
      "Mi portafolio web es una muestra de mi experiencia y habilidades en el desarrollo de aplicaciones móviles, entre otras plataformas. Incluye una variedad de proyectos destacados, como una aplicación móvil para gestionar y respaldar archivos en la nube, un proyecto de lanzador de Minecraft con instalación de mods y un sitio web para enviar listas de compras a través de WhatsApp.";
    document.getElementById("myPortfolioText02").textContent =
      "Utilizando tecnologías como Kotlin, Java, Visual Basic .NET, HTML, JS, CSS y JSON, demuestro mi capacidad para adaptarme a diferentes lenguajes de programación y tecnologías. Además, he trabajado con diversas arquitecturas como MVC, MVP y MVVM, mostrando mi conocimiento en la creación de software bien estructurado y escalable.";
    document.getElementById("myPortfolioText03").textContent =
      "Mi portafolio también destaca mi enfoque en la experiencia del usuario, mostrando interfaces atractivas y fáciles de usar en mis proyectos.";

    //projects
    document.getElementById("myProjects").textContent = "Mis proyectos";
    document.getElementById("myProjects01").textContent =
      "Desarrollo para dispositivos móviles Android";
    document.getElementById("myProjects02").textContent =
      "Desarrollo para Windows 10/11";
    document.getElementById("myProjects03").textContent =
      "Desarrollo de páginas web";
    document.getElementById("btnGo").textContent = "Ir";
    document.getElementById("btnGo01").textContent = "Ir";
    document.getElementById("btnGo02").textContent = "Ir";

    //android platform
    document.getElementById("android-projects").textContent =
      "Proyectos para Android";
    document.getElementById("androidProjectsSF").textContent =
      "Esta es una aplicación móvil para dispositivos Android 10 que permite a los estudiantes gestionar y respaldar archivos en la nube.";
    document.getElementById("androidProjectsSF01").textContent =
      "Fue desarrollada con Kotlin, Java y la API de Google Drive. Cuenta con una atractiva interfaz de usuario tanto en modo oscuro como en modo claro.";
    document.getElementById("androidProjectsSF02").textContent =
      "La aplicación es práctica y segura, proporcionando una solución eficiente para las necesidades de gestión de archivos de los estudiantes.";
    document.getElementById("btnMoreInfo").textContent = "Más información";
    document.getElementById("btnMoreInfo01").textContent = "Más información";
    document.getElementById("btnMoreInfo02").textContent = "Más información";
    document.getElementById("btnMoreInfo03").textContent = "Más información";
    document.getElementById("btnMoreInfo04").textContent = "Más información";
    document.getElementById("btnMoreInfo05").textContent = "Más información";

    document.getElementById("androidProjectsSC").textContent =
      "Super_coupons es una aplicación móvil para Android 10 que permite a los usuarios ver cupones del sitio web (https://linkmydeals.com/) utilizando ApiService Retrofit.";
    document.getElementById("androidProjectsSC01").textContent =
      "El proyecto fue desarrollado utilizando Kotlin y utiliza las arquitecturas MVC, MVP y MVVM. La interfaz de usuario es atractiva y fácil de usar.";
    document.getElementById("androidProjectsRI").textContent =
      "En esta aplicación móvil para Android 10, los usuarios pueden ver imágenes aleatorias del sitio web https://picsum.photos/ al tocar la imagen mostrada.";
    document.getElementById("androidProjectsRI01").textContent =
      "La aplicación está construida utilizando Kotlin, Lifecycle y tecnologías Androidx, y proporciona una experiencia de usuario fluida. Con una interfaz de usuario atractiva, la aplicación permite a los usuarios ver fácilmente imágenes de alta calidad con un simple toque.";

    //windows platform
    document.getElementById("windows-projects").textContent =
      "Proyectos para Windows";
    document.getElementById("windowsProjectsPB").textContent =
      "Es un proyecto en Visual Basic .NET diseñado para copiar directorios importantes a otra ubicación.";
    document.getElementById("windowsProjectsPB01").textContent =
      "Proporciona una solución confiable para hacer una copia de seguridad de datos importantes y garantizar su seguridad en caso de pérdida o corrupción de archivos.";
    document.getElementById("windowsProjectsLM").textContent =
      "Launch_mod es un proyecto en Visual Basic .NET que sirve como lanzador para Minecraft y permite la instalación de un paquete de mods.";
    document.getElementById("windowsProjectsLM01").textContent =
      "El proyecto cuenta con una interfaz intuitiva para facilitar la instalación y administración de mods, lo que permite una experiencia de juego personalizada en Minecraft.";

    //web platform
    document.getElementById("web-projects").textContent =
      "Proyectos de sitios web";
    document.getElementById("websiteProjectsMW").textContent =
      "Este proyecto es un sitio web de portafolio personalizado diseñado con HTML, CSS y JavaScript. Incluye secciones como bienvenida, habilidades, proyectos y contacto.";
    document.getElementById("websiteProjectsMW01").textContent =
      "Destaca por su capacidad de cambiar entre idioma inglés y español, así como también ofrece la opción de cambiar entre tema oscuro y claro.";
    document.getElementById("websiteProjectsSW").textContent =
      "Este proyecto web permite a los usuarios enviar su lista de compras a través de mensajes de WhatsApp. Construido con HTML, JS, CSS y JSON, cuenta con una interfaz de usuario fácil de usar y atractiva.";
    document.getElementById("websiteProjectsSW01").textContent =
      "Los usuarios pueden crear su lista de compras en el sitio y enviarla directamente a través de mensajes de WhatsApp.";

    //contact me
    document.getElementById("contactMe").textContent = "Contáctame.";
    document.getElementById("contactMeEmail").textContent =
      "¿Necesitas ayuda con el desarrollo de aplicaciones móviles? Contáctame por correo electrónico para colaborar en tu próximo proyecto.";
    document.getElementById("contactMeLinkedIn").textContent =
      "Conéctate conmigo en LinkedIn para ver mi experiencia en el desarrollo de aplicaciones móviles. Si estás buscando un desarrollador de Android para tu próximo proyecto, házmelo saber a través de mi perfil.";
    document.getElementById("btnContactMeLinkedIn").textContent = "Mi linkedIn";
    document.getElementById("contactMeGitHub").textContent =
      "Consulta mi perfil de GitHub para ver mis proyectos de desarrollo de aplicaciones móviles. Si estás interesado en colaborar, no dudes en contactarme a través de mi perfil.";
    document.getElementById("btnContactMeGitHub").textContent = "Mi github";
  }
}

// Function to toggle the theme
function toggleTheme() {
  // Get the theme button element
  var themeIcon = document.getElementById("theme-icon");
  var arrowUpIcon = document.getElementById("up-icon");
  var logoNameIcon = document.getElementById("logoName-icon");
  var logoIcon = document.getElementById("logo-icon");
  var body = document.body;

  // Toggle the current theme
  if (currentTheme === "dark") {
    //update content
    currentTheme = "light";
    arrowUpIcon.src = "https://donfriki.000webhostapp.com/img/up-light.png";
    themeIcon.src = "https://donfriki.000webhostapp.com/img/light-mode.png";
    logoIcon.src =
      "https://donfriki.000webhostapp.com/img/elfrikiamv-logo-light.png";
    logoNameIcon.src =
      "https://donfriki.000webhostapp.com/img/elfrikiamv-V-sBG.png";

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  } else {
    //update content
    currentTheme = "dark";
    themeIcon.src = "https://donfriki.000webhostapp.com/img/night-mode.png";
    arrowUpIcon.src = "https://donfriki.000webhostapp.com/img/up-night.png";
    logoIcon.src =
      "https://donfriki.000webhostapp.com/img/elfrikiamv-logo-night.png";
    logoNameIcon.src =
      "https://donfriki.000webhostapp.com/img/elfrikiamv-n-sBG.png";

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
}

//up top button
function toggleUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
