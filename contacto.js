const contactoLink = document.getElementById("contactoLink");
const offset = 120; // Define la cantidad de píxeles de espacio antes del div

contactoLink.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  const contactoSection = document.getElementById("contacto");
  const targetPosition = contactoSection.getBoundingClientRect().top + window.pageYOffset - offset;

  // Desplazamiento suave usando scrollTo y la función easeInOutQuad
  const startPosition = window.pageYOffset;
  const duration = 1000; // Duración de la animación en milisegundos
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
});
