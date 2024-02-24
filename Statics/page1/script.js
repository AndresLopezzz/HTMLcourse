document.addEventListener("DOMContentLoaded", function () {
  var tiempoDeAnimacion = 800;
  var hideTimeout;

  // Obtén todos los elementos con el id "text"
  var textElements = document.querySelectorAll("#text");

  // Itera sobre cada elemento "text"
  textElements.forEach(function (textElement) {
    textElement.addEventListener("mouseenter", function () {
      // Cambiado a "mouseenter"
      // Cambia el ID del div a "id-show"
      textElement.id = "id-show";

      // Muestra el contenido correspondiente al div "id-show"
      mostrarContenido(textElement.id);
    });

    textElement.addEventListener("mouseout", function () {
      // Oculta el contenido si el mouse sale del área del div "id-show"
      var showtextElement = document.getElementById("showtext");
      showtextElement.style.opacity = 0;
      showtextElement.style.transition = "opacity " + tiempoDeAnimacion + "ms";
      hideTimeout = setTimeout(function () {
        showtextElement.style.display = "none";
      }, tiempoDeAnimacion);

      // Restaura el ID original del div
      textElement.id = "text";
      console.log("Ocultando contenido");
    });
  });

  // Función para mostrar el contenido correspondiente al div con el ID "id-show"
  function mostrarContenido(id) {
    // Oculta el contenido previamente mostrado
    var showtextElement = document.getElementById("showtext");
    var contentToShow = document.getElementById(id + "-content");
    clearTimeout(hideTimeout);
    showtextElement.style.display = "block";
    showtextElement.style.transition = "opacity " + tiempoDeAnimacion + "ms";
    showtextElement.style.opacity = 1;
    contentToShow.style.display = "block";
    console.log("Mostrando contenido para el ID:", id);
  }
});
