document.addEventListener("DOMContentLoaded", function () {
    const btnMostrarSecciones = document.getElementById("btnMostrarSecciones");
    const seccionServicios = document.getElementById('sesion2');
    const seccionColaboradores = document.getElementById('section3');
  
    btnMostrarSecciones.addEventListener('click', function () {
      const aceptar = window.confirm("¿Desea mostrar las secciones de Servicios y Colaboradores?");
      if (aceptar) {
        seccionServicios.style.display = 'block';
        seccionColaboradores.style.display = 'block';
      }
    });
  });



function ShowHide() {
    var container = document.getElementsByClassName("sesion2")[0];

    if (container.style.visibility === "hidden") {
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden";
    }
}

