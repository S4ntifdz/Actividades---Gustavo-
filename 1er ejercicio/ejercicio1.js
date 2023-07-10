function mostrarVentanaEmergente(resultado) {
  let ventanaEmergente = document.getElementById('ventana-emergente');
  let resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = 'El resultado es: ' + resultado;
  ventanaEmergente.style.display = 'block';
}

function ocultarVentanaEmergente() {
  let ventanaEmergente = document.getElementById('ventana-emergente');
  ventanaEmergente.style.display = 'none';
}

function calcular() {
  let valor1 = parseFloat(document.getElementById('input1').value);
  let valor2 = parseFloat(document.getElementById('input2').value);
  let operacion = document.querySelector('input[name="operacion"]:checked').value;
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = valor1 + valor2;
      break;
    case 'restar':
      resultado = valor1 - valor2;
      break;
    case 'multiplicar':
      resultado = valor1 * valor2;
      break;
    case 'dividir':
      resultado = valor1 / valor2;
      break;
    default:
      resultado = 'Operación no válida';
  }

  mostrarVentanaEmergente(resultado);
}

document.getElementById('calcular').addEventListener('click', calcular);
document.getElementById('cerrar').addEventListener('click', ocultarVentanaEmergente);
