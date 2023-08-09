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
}

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
}


function dividir(){
 // dividi a la mitad
 // devuelve la izquierda
 // devuelve la derecha
}
function marge(izq, der){
  // izq[] < o > der[]
  // [] oredenado
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
