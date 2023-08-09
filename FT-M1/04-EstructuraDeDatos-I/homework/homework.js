'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {


  /* OPCIÓN ITARATIVA

  let factorial = n // definimos n como el valor factorial.

  while(n>=1){
    n-- // reducimos su valor en 1
    factorial *= n // multiplicamos el nro facotrial por n - 1 
  }
  return factorial 
  */


  // El factorial de un número entero positivo es el producto de todos los enteros positivos desde 1 hasta él. ( "!"" = signo factorial. )
  // Ejemplo:  es la multiplicación de todos todos los números enteros hasta él.
  // 5! = 5*4*3*2*1 = 120
  // Es el número que me permite saber cuántas combinación diferentes se pueden haber en un grupo de elementos cambiándolos de orden.
  // Por definición 0! es 1.

  if (n === 0 || n === 1) return 1;
  return n * nFactorial(n - 1);

}

//-----------------------------------------------------------------------------

function nFibonacci(n) {

  if (n < 2) return n
  return nFibonacci(n - 2) + nFibonacci(n - 1)


  /*   if (n === 0) {
      return 0
    }
    if (n === 1) {
      return 1
    }
    return nFibonacci(n - 1) + nFibonacci(n - 2) */

}

/*  SIN RECURSIVIDAD

const fibonacci = n => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib{ i - 1 }
  }
  return fib[n]
  
} */

//----------------------------------------------------------------

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/



class Queue {
  constructor() {
    this.fila = [];
  }
  size() {
    return this.fila.length;
  }
  enqueue(element) {
    this.fila.push(element);
  }
  dequeue(element) {
    if (this.fila.length === 0) {
      return undefined;
    }
    return this.fila.shift(element);
  }
} 


/* Para pasar info al Queue 
let miQueue = new Queue();
miQueue(2);
miQueue(3);
miQueue(25);
console.log(miQueue)
console.log(miQueue.size)
*/

//----------------------------------------------------------------
/*
function Queue() {
  this.fila = [];
}
Queue.prototype.enqueue = function(element) {
  this.fila.push(element);
};
Queue.prototype.dequeue = function() {
  if (this.fila.length === 0) {
    return undefined;
  }
  return this.fila.shift();
};
Queue.prototype.size = function() {
  return this.fila.length;
};
*/
//----------------------------------------------------------------





/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
