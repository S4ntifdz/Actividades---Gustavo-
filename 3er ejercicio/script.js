function muestraArray(){

let array = [];

let inicio = document.getElementById("inicio").value
let fin = document.getElementById("fin").value
let step = document.getElementById("step").value

inicio = parseInt(inicio)
fin = parseInt(fin)
step = parseInt(step)

for (i=inicio; i <= fin; i += step){
    array.push(i);
}

let resultadoElement = document.getElementById('resultado');
resultadoElement.textContent = 'El resultado es: ' + array;
}

