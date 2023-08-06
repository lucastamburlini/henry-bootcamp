'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this._length = 0
  this.head = null
}

function Node(value) {
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function (value) {
  // Se crea un nuevo node utilizando el constructor Node y se le pasa el valor value.
  let node = new Node(value)
  // Se establece una variable current para rastrear el node actual mientras se recorre la lista.
  let current = this.head
  // Si la lista está vacía (no hay current), el nuevo node se convierte en el primer node de la lista estableciendo this.head en el nuevo node.
  if (!current) {
    this.head = node
    // Si la lista no está vacía, se recorre la lista hasta llegar al último node utilizando el bucle while(current.next).
  } else {
    // Una vez se llega al último node, se establece la referencia next del último node al nuevo node creado.
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  // Finalmente, se incrementa _length para reflejar que un nuevo node ha sido añadido a la lista.
  this._length++
}

LinkedList.prototype.remove = function () {
  let current = this.head;

  // If para verificar si la lista está vacía, Si la lista está vacía, no hay nada que eliminar, retorna null.
  if (!current) {
    return null
  }

  // Si hay un sólo nodo en la lista
  if (!current.next) {
    let removeValue = current.value; // Guardar el valor del nodo a eliminar
    this.head = null; // Establecer el head como null para indicar lista vacía
    this._length--; // Reducir la longitud de la lista
    return removeValue; // Devolver el valor del nodo eliminado
  }

  // Con el while recorre la lista hasta el penúltimo nodo y lo asigna
  while (current.next.next) {
    current = current.next
  };

  let removeValue = current.next.value;// Guardar el valor del último nodo a eliminar
  current.next = null // Eliminar la referencia al último nodo
  this._length--; // Reducir la longitud de la lista
  return removeValue // Devolver el valor del nodo eliminado

}

LinkedList.prototype.search = function (value, cb) {
  let current = this.head

  while (current) {

    if (cb && typeof cb === 'function') {
      if (cb(current.value)) {
        return current.value
      }
    } else if (value && typeof value === 'string') {
      if (current.value === value) {
        return current.value
      }
    } else if (value && typeof value === 'function') {
      if (value(current.value)) {
        return current.value
      }
    } else if (typeof value === 'object' && value !== null) {
      if (JSON.stringify(current.value) === JSON.stringify(value)) {
        return current.value
      }
    }



    current = current.next
  }
  return null
};






/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() { }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
