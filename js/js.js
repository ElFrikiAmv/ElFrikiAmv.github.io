//  Para desplazar la página a la sección de contacto al hacer clic en el botón
document
  .getElementById("scrollToContact")
  .addEventListener("click", function () {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  });
