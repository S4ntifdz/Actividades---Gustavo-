window.addEventListener('load', function() {
  if (window.location.pathname.includes('formulario.html')) {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const fechaNacimiento = document.getElementById('fecha').value;
      const genero = document.querySelector('input[name="genero"]:checked').value;
      const biografia = document.getElementById('biografia').value;

      const lenguajesSeleccionados = {
        html5: false,
        javascript: false,
        css3: false,
        angular: false,
        python: false,
        linux: false
      };

      const buttons = document.querySelectorAll('.icon-button');
      buttons.forEach(button => {
        if (button.classList.contains('selected')) {
          const lang = button.getAttribute('data-lang');
          lenguajesSeleccionados[lang] = true;
        }
      });

      const datos = {
        nombre,
        apellido,
        fechaNacimiento,
        genero,
        biografia,
        lenguajesSeleccionados
      };

      localStorage.setItem('datos', JSON.stringify(datos));
      window.location.href = 'resultado.html';
    });
  } else if (window.location.pathname.includes('resultado.html')) {
    const datosJSON = localStorage.getItem('datos');
    const datos = JSON.parse(datosJSON);

    const nombre = datos.nombre;
    const apellido = datos.apellido;
    const fechaNacimiento = datos.fechaNacimiento;
    const genero = datos.genero;
    const biografia = datos.biografia;
    const lenguajesSeleccionados = datos.lenguajesSeleccionados;

    // -----------ACA CALCULO LA EDAD---------------
    const fechaActual = new Date();
    const fechaNacimientoObj = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

    // ¿ MES NACIMIENTO > MES ACTUAL?
    if (
      fechaNacimientoObj.getMonth() > fechaActual.getMonth() ||
      (fechaNacimientoObj.getMonth() === fechaActual.getMonth() &&
        fechaNacimientoObj.getDate() > fechaActual.getDate())
    ) {
      edad--;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.style.color = "black"; 
    resultadoElement.style.fontWeight = "bold"
    resultadoElement.innerHTML = `${apellido}, ${nombre}<br><br> `;
    resultadoElement.innerHTML += `Edad: ${edad} .<br><br>`;
    resultadoElement.innerHTML += `Genero: ${genero}.<br><br>`;
    
    resultadoElement.innerHTML += `DNI: ${biografia}`;
    
    // resultadoElement.textContent = ` ${apellido}, ${nombre}`;
    // resultadoElement.textContent += ` Edad: ${edad} años.`;
    // resultadoElement.textContent += ` Género: ${genero}.`;
    // resultadoElement.textContent += ` Biografía: ${biografia}`;



    const lenguajesContainer = document.getElementById('lenguajes-seleccionados');
    for (const lang in lenguajesSeleccionados) {
      if (lenguajesSeleccionados[lang]) {
        const iconElement = document.createElement('ion-icon');
        iconElement.setAttribute('name', `logo-${lang}`);
        lenguajesContainer.appendChild(iconElement);
      }
    }

    // Limpieza
    localStorage.removeItem('datos');
  }
});

const buttons = document.querySelectorAll('.icon-button');
buttons.forEach(button => {
  button.addEventListener('click', toggleSelection);
});

function toggleSelection(event) {
  const button = event.target;
  button.classList.toggle('selected');
}







