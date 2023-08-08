'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null; // valores menos a la izquierda
   this.right = null; // valores mayores a la derecha
}

BinarySearchTree.prototype.insert = function (value) {
   //-----------------------------------------------
   /*    let subTree = new BinarySearchTree(value);
      if (value < this.value) {
         if (this.left === null) {
            this.left = subTree
         } else {
            this.left.insert(value)
         }
      } else if (value >= this.value) {
         if (this.right === null) {
            this.right = subTree
         } else {
            this.right.insert(value)
         }
      } */
   //-----------------------------------------------
   // Valores a la izquierda

   if (value < this.value) {
      if (this.left === null) {
         this.left = new BinarySearchTree(value) // se crea una nueva instancia.
      } else {
         this.left.insert(value)
      }
   }

   // Valores a la derecha

   if (value > this.value) {
      if (this.right === null) {
         this.right = new BinarySearchTree(value)
      } else {
         this.right.insert()
      }
   }


};

let tree = new BinarySearchTree(20);
tree.insert(15)
tree.insert(25)
tree.insert(5)
tree.insert(17)
tree.insert(21)
tree.insert(28)
console.log(tree);

BinarySearchTree.prototype.size = function () {

   //-----------------------------------------------

   /*  let size = 1;
 
    if (!this.value) {
       return 0
    }
 
    if (this.left) {
       size += this.left.size();
    }
 
    if (this.right) {
       size += this.right.size();
    }
 
    return size; */
   //-----------------------------------------------
   /*  return 1 + (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0) */
   //-----------------------------------------------

   // CASO A - AMBAS RAMAS TIENEN ELEMENTOS
   if (this.left && this.right) return 1 + this.left.size() + this.right();
   // CASO B - UNA SOLA RAMA TIENE ELEMENTOS
   if (this.left && !this.right) return 1 + this.left.size();
   if (!this.left && this.right) return 1 + this.right.size();
   // AMBAS RAMAS VACÍAS
   if (!this.left && !this.right) return 1;

};
console.log(tree.size());

BinarySearchTree.prototype.contains = function (value) {

   if (this.value === value) {
      return true
   } else if (value < this.value && this.left) {
      return this.left.contains(value);
   } else if (value > this.value && this.right) {
      return this.right.contains(value);
   } else {
      return false;
   }

   //-----------------------------------------------
   /*
   if (this.value === value) return true
   if (value < this.value) {
      if (this.left === null) {
         return false
      } else {
         return this.left.contains()
      }
   }

   if (value > this.value) {
      if (this.right === null) {
         return false
      } else {
         return this.right.contains()
      }
   } 
   */


};

/* BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) {
      return true;
   } else if (value < this.value) {
      if (this.left === null) {
         return false;
      } else {
         return this.left.contains(value);
      }
   } else {
      if (this.right === null) {
         return false;
      } else {
         return this.right.contains(value);
      }
   }
};
*/
let result = tree.contains()
console.log(result);



// Vamos a enviar una función print() para que nos muestre los nodos.
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

   switch (order) {

      case "pre-order": // NODO ⇒ IZQUIERDA ⇒ DERECHA
         cb(this.value)
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
         break

      // treu && fn() // if(true){fn()} // corto circuito

      case "post-order": // IZQUIERDA ⇒ DERECHA ⇒ NODO
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
         cb(this.value)
         break

      default: // IZQUIERDA ⇒ NODO ⇒ DERECHA
         if (this.left !== null) this.left.depthFirstForEach(cb, order)
         cb(this.value)
         if (this.right !== null) this.right.depthFirstForEach(cb, order)
         break;
   }
};





BinarySearchTree.prototype.breadthFirstForEach = function (cb, depth = []) {
   cb(this.value) // primero ejecutamos el root para luego poder ejecutar los hijos.

   if (this.left !== null) {
      depth.push(this.left)
   }

   if (this.right !== null) {
      depth.push(this.right)
   }

   if (depth.length > 0) {
      depth.shift().breadthFirstForEach(cb, depth)
   }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
