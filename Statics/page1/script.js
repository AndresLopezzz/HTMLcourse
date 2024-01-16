// Obtén el elemento con id 'text' (Mac) y 'showtext'
var macElement = document.getElementById("mac-text");
var showtextElement = document.getElementById("showtext");
var tiempoDeAnimacion = 500;

macElement.addEventListener("mouseover", function () {
  console.log("Mouse sobre Mac");
  showtextElement.style.display = "block";
});

macElement.addEventListener("mouseover", function () {
  showtextElement.style.transition = "opacity " + tiempoDeAnimacion + "ms";
  showtextElement.style.opacity = 1; // Hace que el elemento sea completamente visible
});

macElement.addEventListener("mouseout", function () {
  // Cambia el tiempo de animación para la desaparición
  showtextElement.style.transition = "opacity " + tiempoDeAnimacion + "ms";
  showtextElement.style.opacity = 0; // Hace que el elemento sea completamente transparente
});
