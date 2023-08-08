'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factores = [1];
  let divisor = 2;
  for (let i = 1; num > 1; i++) {
    if (num % divisor === 0) {
      factores.push(divisor)
      num = num / divisor
    } else {
      divisor++
    }
  }
  return factores
}
console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [7,8,5,2,11]
  // comparao i y el valor siguiente i > i + 1
  // Si es mayor intercambio
  // Recorro los punteros
  // generar un marcador que sea true al hacer un cambio pero que inicialmente sea false
  // let swap = false ==> si llego a hacer un cambio voy a setar true
  // Mientas que swap sea true tengo que seguir haciendo el ordenamiento
  // dos for o un while
  /*
    for (let i = 0; i < array.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
          swapped = true;
        }
      }
    }
    return array
  */

  let swapped = false;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = false;
      }
    }
  }
  return array;



}
let result2 = bubbleSort([7, 8, 5, 2, 11])
console.log(result2)


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [7,8,5,2,11]
  // let i
  // let j
  // voy a extraer el segundo elemento de array y lo comparo con el anterior
  // segundo elemento j = i+1
  // comparar el anterior i
  // Si es menor lo invierto (ojo, utilizar para no perder el valor)

  //1 while
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      let segundo = array[i + 1];
      if (array[i] < segundo) {
        let aux = array[i];
      }
    }
  }
}
let result = insertionSort([7, 8, 5, 2, 11])
console.log(result)

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [7,8,5,2,11]
  // i
  //   j
  // let min = value (primer dato i = 0)
  // Comparar i < j 
  // min = j
  // si termine de recorrer el array coloco el valor min en la posición de i
  //recorre ambos marcadores
  // i++

  // 2 for
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
