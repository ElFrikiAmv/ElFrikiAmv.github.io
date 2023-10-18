//  Para desplazar la página a la sección de contacto al hacer clic en el botón
document
  .getElementById("btnWelcomeScrollToContact")
  .addEventListener("click", function () {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  });
