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
let result1 = bubbleSort([7, 8, 5, 2, 11])
console.log(result1)


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
  let swapped = true; // Inicializamos swapped en true para entrar al bucle while
  while (swapped) {   // Inicia un bucle while que se ejecuta mientras swapped sea true
    swapped = false;  // Inicializa swapped en false al inicio del bucle

    for (let i = 0; i < array.length; i++) { // Inicia un bucle for que recorre el arreglo
      let segundo = array[i + 1]; // Almacena el elemento siguiente al actual en segundo
      if (array[i] > segundo) {   // Si el elemento actual es mayor que el siguiente
        let aux = array[i];       // Guarda el valor del elemento actual en aux
        array[i] = segundo;       // Reemplaza el valor del elemento actual con el siguiente
        array[i + 1] = aux;       // Reemplaza el valor del elemento siguiente con el auxiliar
        swapped = true;           // Indica que se realizó un intercambio
      }
    }
  }
  return array; // Devuelve el arreglo ordenado
}
let result2 = insertionSort([7, 8, 5, 2, 11])
console.log(result2)

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

  for (let i = 0; i < array.length; i++) {
    let min = i; // Suponemos que el elemento actual es el mínimo
    // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min])// Comparamos con el elemento en min
        min = j;
    }
    // Intercambiar el elemento actual con el elemento mínimo
    if (min !== i) {
      let temp = array[i]
      array[i] = array[min]
      array[min] = temp
    }
  }
  return array
}
let result3 = selectionSort([7, 8, 5, 2, 11])
console.log(result3)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
