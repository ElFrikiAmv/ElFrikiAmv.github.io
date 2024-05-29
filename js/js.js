//tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//animacion al bajar aparecen los elementos
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500, // Duración de la animación en milisegundos
    once: false, // La animación solo se activa una vez
  });
});
//cv
function downloadCV() {
  // Crear un elemento <a> en el DOM
  var link = document.createElement("a");

  // Establecer el atributo href con la ruta del archivo PDF
  link.href = "https://elfrikiamv.com/docs/elfrikiamv-cv.pdf";

  // Establecer el atributo download con el nombre que deseas para el archivo
  link.download = "elfrikiamv-cv.pdf";

  // Abrir el enlace en una nueva ventana/tabla (esto debería forzar la descarga)
  link.target = "_blank";

  // Agregar el enlace al final del cuerpo del documento
  document.body.appendChild(link);

  // Simular un clic en el enlace para iniciar la descarga
  link.click();

  // Eliminar el enlace del documento después de la descarga
  document.body.removeChild(link);
}
//container skills
Vue.config.devtools = true;

// Obtén todos los elementos con la clase 'light'
var lights = document.querySelectorAll(".light");

/* if (screen.width > 991) { */
Vue.component("card", {
  template: `
      <div class="card-wrap"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="card">
        <div class="card"
          :style="cardStyle">
          <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
          <div class="card-info">
            <slot name="header"></slot>
            <slot name="content"></slot>
          </div>
        </div>
      </div>`,
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 10; // Reducido de 30 para una rotación más suave
      //wea vertical de inclinacion
      const rY = this.mousePY * -1; // Reducido de 30 para una rotación más suave
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -13; // Reducido de -40 para una transición más suave
      const tY = this.mousePY * -5; // Reducido de -40 para una transición más suave
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
  mounted() {
    // Calcular las dimensiones de la tarjeta en la función montada
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ["dataImage"],
});

const app = new Vue({
  el: "#app",
});

if (screen.width <= 991) {
  // Itera sobre cada elemento y reemplaza 'light' con 'light22'
  lights.forEach(function (light) {
    light.className = light.className.replace(/\blight\b/g, "light22");
  });
}
/* } else {
  // Itera sobre cada elemento y reemplaza 'light' con 'light22'
  lights.forEach(function (light) {
    light.className = light.className.replace(/\blight\b/g, "light22");
  });
} */

//buttons

function gitHubStudentFolder() {
  window.open("https://github.com/elfrikiamv/student_folder", "_blank");
}
function gitHubSuperPointSale() {
  window.open("https://github.com/elfrikiamv/super_pointSale", "_blank");
}
function gitHubSuperCoupons() {
  window.open("https://github.com/elfrikiamv/super_coupons", "_blank");
}
function gitHubRandomImage() {
  window.open("https://github.com/elfrikiamv/random_image", "_blank");
}
function gitHubSimpleNote() {
  window.open("https://github.com/elfrikiamv/simple_note", "_blank");
}
function gitHubSimpleMic() {
  window.open("https://github.com/elfrikiamv/simple_mic", "_blank");
}
function gitHubLaunchMod() {
  window.open("https://github.com/elfrikiamv/launch_mod", "_blank");
}
function gitHubProjectBackup() {
  window.open("https://github.com/elfrikiamv/project_backup", "_blank");
}
function gitHubElfrikiamvWeb() {
  window.open("https://github.com/elfrikiamv/elfrikiamv.github.io", "_blank");
}
function gitHubShopWp() {
  window.open("https://github.com/elfrikiamv/shop_wp", "_blank");
}
function gitHubElfrikiamvFigma() {
  window.open(
    "https://www.figma.com/file/fBtLXtJn8l194UhCD2ognI/elfrikiamv.tech?type=design&node-id=143%3A94&mode=design&t=joqUA7fXX6oTDwfr-1",
    "_blank"
  );
}
function gitHubStudentFolderFigma() {
  window.open(
    "https://www.figma.com/file/5KXPNiBtSTAFFUDXVLLOAv/student_folder?type=design&node-id=0%3A1&mode=design&t=lGqLDHJyfm88WY6e-1",
    "_blank"
  );
}
function LinkedInGo() {
  window.open("https://www.linkedin.com/in/elfrikiamv", "_blank");
}
function GithubGo() {
  window.open("https://github.com/elfrikiamv", "_blank");
}
/* function GmailGo() {
  window.open("https://github.com/elfrikiamv", "_blank");
} */

// Function to copy text to clipboard
function copyToClipboard(text) {
  // Create a text input element
  var input = document.createElement("textarea");
  // Set the value of the element to the provided text
  input.value = text;
  // Append the element to the DOM
  document.body.appendChild(input);
  // Select the text of the element
  input.select();
  // Copy the text to the clipboard
  document.execCommand("copy");
  // Remove the element from the DOM
  document.body.removeChild(input);
}

// Call this function when the button is clicked
function GmailGo() {
  // Text you want to copy (in this case, an example email)
  var email = "contact@elfrikiamv.com";

  // Call the function to copy to clipboard
  copyToClipboard(email);

  // Optional: Show a success message
  alert("Email copied to clipboard: " + email);
}

// Call this function when the button home navbar is clicked
function goToHome() {
  const homeSection = document.getElementById("home-section");
  homeSection.scrollIntoView({ behavior: "smooth" });
}
// Call this function when the button portfolio navbar is clicked
function goToPortfolio() {
  const homeSection = document.getElementById("portfolio-section");
  homeSection.scrollIntoView({ behavior: "smooth" });
}
// Call this function when the button about me navbar is clicked
function goToAboutMe() {
  const homeSection = document.getElementById("about-section");
  homeSection.scrollIntoView({ behavior: "smooth" });
}
// Call this function when the button contact navbar is clicked
function goToContactMe() {
  const homeSection = document.getElementById("contact-section");
  homeSection.scrollIntoView({ behavior: "smooth" });
}

//scroll navbar opacity
/* document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let isScrolling = false;

  function handleScroll() {
    if (window.scrollY > 0) {
      navbar.style.opacity = 0.7; // Cambia este valor según sea necesario
    } else {
      navbar.style.opacity = 1;
    }
  }

  function debouncedScroll() {
    if (!isScrolling) {
      handleScroll();
      isScrolling = true;

      setTimeout(function () {
        isScrolling = false;
      }, 200); // Ajusta el tiempo de espera según sea necesario
    }
  }

  window.addEventListener("scroll", debouncedScroll);
}); */
