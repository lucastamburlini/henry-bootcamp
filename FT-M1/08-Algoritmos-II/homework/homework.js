'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [7,2,8,5,3,9,4]
  // Condición de corte = if([1]) => array
  // let pivote = Math.random()
  // recorrer el array i < pivote = izq[] && i > pivote = der[]
  // quickSort(izq)  quickSort(der)
  // return array

  if (array.length < 1) return [];
  let arr = []
  let arrIzq = [];
  let arrDer = [];

  let pivot = array[0]
  console.log(pivot);

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      arrIzq.push(array[i])

    } else {
      arrDer.push(array[i])
    }
  }
  console.log(arrIzq);
  console.log(arrDer);

  return arr.concat(quickSort(arrIzq), pivot, quickSort(arrDer))
}
let result = quickSort([7, 2, 8, 5, 3, 9, 4])
console.log(result);



let array = [7, 2, 8, 5, 3, 9, 4];

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora


  // Podemos trabajar con tres funciones independientes.
  // [7,2,8,5,3,9,4]
  // if([1]) = return array
  // dividir([])
  // izq[] | der[]
  // merge(margeSort(izq[]) + margeSort.(der[])) solo vamos a unir los array que tiene un solo elemento

  if (array.length <= 1) return array

  let div = dividir(array)
  let izq = div[0]
  let der = div[1]


  return merge(mergeSort(izq), mergeSort(der))
}


function dividir(array) {
  // dividi a la mitad
  // devuelve la izquierda
  // devuelve la derecha

  let mitad = Math.floor(array.length / 2)
  console.log(array[mitad]);
  let izq = array.slice(0, mitad)
  console.log(izq);
  let der = array.slice(mitad)
  console.log(der);
  return [izq, der]
}


function merge(izq, der) {
  // izq[] < o > der[]
  // [] oredenado

  let arr = []
  let indexIzq = 0;
  let indexDer = 0;

  while (indexIzq < izq.length && indexDer < der.length) {
    if (izq[indexIzq] < der[indexDer]) {
      arr.push(izq[indexIzq])
      console.log(iIza);
      indexIzq++
    } else {
      arr.push(der[indexDer])
      indexDer++
      console.log(indexDer);
    }
  }
  return arr.concat(izq.slice(indexIzq)).concat(der.slice(indexDer));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
