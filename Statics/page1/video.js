document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos
  var video = document.getElementById("video");
  var imagen = document.getElementById("imagen");
  var spanProm = document.getElementById("span-prom");

  // Ocultar el video inicialmente
  video.style.display = "none";

  // Después de 5 segundos, mostrar el video y ocultar la imagen
  setTimeout(function () {
    video.style.display = "block";
    imagen.style.display = "none";
  }, 5000);

  // Agregar evento al botón de suscripción (puedes modificarlo según sea necesario)
  var subscribeBtn = document.getElementById("subscribeBtn");
  subscribeBtn.addEventListener("click", function () {
    alert("Subscripción exitosa!");
  });
});
