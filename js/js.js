// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Initialize smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true
})

// Initialize AOS
AOS.init({
    once: true
  });
  