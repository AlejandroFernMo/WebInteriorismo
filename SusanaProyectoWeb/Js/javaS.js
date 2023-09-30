document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el enlace
    var enlacePrincipal = document.getElementById("enlace_principal");
    
    // Agregar un manejador de eventos al hacer clic en el enlace
    enlacePrincipal.addEventListener("click", function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
      
      // Agregar una clase para aplicar un estilo de desvanecimiento
      document.body.classList.add("fade-out");
      
      // Redirigir a la nueva página después de un retraso (1 segundo en este ejemplo)
      setTimeout(function() {
        window.location.href = enlacePrincipal.getAttribute("href");
      }, 1500);
    });
  });
  