// ------------------------ EJERCICIO 1 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Queue{
    constructor(){
        this.array = []
    }
    
    enqueue(elemento) {
      return this.array.push(elemento);
    };
    
    dequeue() {
      return this.array.shift();
    };

    size() {
      return this.array.length;
    };
}

/*
 * Completa la función 'guardarTragos' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe una QUEUE por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function guardarTragos (tragosQueue) {
    // Tu código aquí
    let obj = {}

    if(tragosQueue.size() > 0 ){
      while (tragosQueue.size() > 0) {
      let trago = tragosQueue.dequeue()
      if (!obj[trago]) {
        obj[trago] = { "trago": trago, "cantidad": 1 }
      } else {
        obj[trago].cantidad++
      }
    }
    } else {
        return "no hay tragos"
    }
    return obj
    
};

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	let tragosQueue = new Queue();

	for (let i = 0; i < length; i++) {
		tragosQueue.enqueue(readLine().trim());
	}

	const result = guardarTragos(tragosQueue);

	for (let prop in result) {
		ws.write(prop + " " + result[prop].cantidad + "\n")
	}

	ws.end();
}

// ------------------------ EJERCICIO 2 ---------------------------------------
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");
    

	main();
});

function readLine() {
	return inputString[currentLine++];
}

class Stack {
	constructor() {
		this.array = [];
	}

	push(elemento) {
		this.array.push(elemento);
	}

	pop() {
		return this.array.pop();
	}

	size() {
		return this.array.length;
	}
}

/*
 * Completa el método 'prepararMenu' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe por parámetro:
 *  - un ARREGLO DE STRINGS 'tragos'.
 *  - un ARREGLO DE ENTEROS 'tiempos'.
 *  - un NÚMERO 'tiempoLimite'.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function prepararMenu(tragos, tiempos, tiempoLimite) {
    // Tu código aquí

   let objetoPilas = {
        tragos: new Stack(),
        tiempos: new Stack()
    };

    for (let i = tragos.length - 1; i >= 0; i--) {
        let trago = tragos[i];
        let tiempo = tiempos[i];

        if (tiempo <= tiempoLimite) {
            objetoPilas.tragos.push(trago);
            objetoPilas.tiempos.push(tiempo);
        }
    }

    return objetoPilas;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const tragosInput = readLine().trim().split(", "),
		tiemposInput = readLine()
			.trim()
			.split(" ")
			.map(el => parseInt(el)),
		tiempoLimiteInput = parseInt(readLine().trim(), 10);

	const { tragos, tiempos } = prepararMenu(
		tragosInput,
		tiemposInput,
		tiempoLimiteInput
	);

	if (!(tragos instanceof Stack) || !(tiempos instanceof Stack))
		ws.write("la función debe retornar un objeto con dos Stacks adentro\n");

    ws.write(Array.from(tragos.array).join(", ") + "\n");
	ws.write(Array.from(tiempos.array).join(" ") + "\n");

    
	ws.end();
}
// ------------------------ EJERCICIO 3 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la función 'chequearDisponibilidad' a continuación.
 *
 * La función 'chequearDisponibilidad' recibe un ARREGLO DE STRINGS por parámetro.
 * La función 'chequearDisponibilidad' debe retornar una nueva FUNCIÓN. Ésta, a su vez, recibe un ARREGLO DE STRINGS por parámetro, y retorna un STRING.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function chequearDisponibilidad(ropas) {
    // Tu código aquí

    let n = 0;
    let m = ropas.length;

    return function checkStockTienda(stock) {
        for (let i = 0; i < ropas.length; i++) {
            if (stock.includes(ropas[i])) {
                n++;
            } 
        }

       if (n === 0) {
            return "No se encontraron las prendas solicitadas";
        } else if (n === ropas.length) {
            return "Todas las prendas fueron encontradas";
        } else {
            return `${n} de las ${m} prendas solicitadas se encuentran en stock`;
        }
       
    };
   
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ropasCount = parseInt(readLine().trim(), 10);

    const ropas = [];
    const stock = [];

    for (let i = 0; i < ropasCount; i++) {
        const ropasItem = readLine();
        ropas.push(ropasItem);
    }

    const stockCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < stockCount; i++) {
        const stockItem = readLine();
        stock.push(stockItem);
    }

    const result = chequearDisponibilidad(ropas)(stock);

    ws.write(result + '\n');
    ws.end();
}

// ------------------------ EJERCICIO 4 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la función 'casasAnuales' a continuación.
 *
 * La función debe retornar un NÚMERO ENTERO.
 * La función recibe un NÚMERO 'n' por parámetro.
 *
 * No modifiques nada por fuera de la función.
 */

function casasAnuales(n) {
    // Tu código aquí:
    let cantidadDeCasas = 0;
    let casas = 30;
    
    if(n < 0) {
        return false
    } else if (n === 0) {
        return 0
    } else if (n === 1) {
        return casas
    } else {
      cantidadDeCasas += (  casasAnuales(n-1) + casasAnuales(n/n))
    }
      
    
    
    return cantidadDeCasas
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const casasAnualesString = casasAnuales.toString();
    const ocurrences = casasAnualesString.match(/casasAnuales/g).length;

    const n = parseInt(readLine().trim(), 10);

    const result = casasAnuales(n);

    ocurrences > 1
        ? ws.write(result + '\n')
        : ws.write("Debes utilizar recursión para la resolución de este ejercicio")
    
    ws.end();
}

// ------------------------ EJERCICIO 5 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la función 'liquidacion' a continuación.
 *
 * La función debe retornar un ARREGLO DE OBJETOS ó un STRING.
 * La función recibe un ARREGLO DE OBJETOS 'prendas' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función
 *
 * TIP: Puedes agregar rest o default parameters a la función.
 */

function liquidacion(prendas, i = 0, prendasLiquidacion = []) {
    if (i === prendas.length) {
        if (prendasLiquidacion.length === 0) {
            return "No hay prendas en liquidación";
        }
        return prendasLiquidacion;
    }

    const prenda = prendas[i][Object.keys(prendas[i])[0]];
    if (prenda.LIQUIDACION === true) {
        prendasLiquidacion.push(prendas[i]);
    }

    return liquidacion(prendas, i + 1, prendasLiquidacion);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const liquidacionString = liquidacion.toString();
    const ocurrences = liquidacionString.match(/liquidacion/g).length;

    let strings = [];

    for (let i = 0; i < length; i++) {
        const prendasItem = readLine();
        strings.push(prendasItem);
    }
    
    let prendas = [];
    
    for (let i = 0; i < strings.length; i+=3) {
    let liquidacion = strings[i + 1].split(":")[0].trim();
    let descuento = strings[i + 2].split(":")[0].trim();
    let liquidacionValue = strings[i + 1].split(":")[1].trim();
    let descuentoValue = strings[i + 2].split(":")[1].trim();
    prendas.push({
      [strings[i]]: {
        [liquidacion]: liquidacionValue === "true" ? true : false,
        [descuento]: descuentoValue === "true" ? true : false,
      },
    });    
  } 
        
    let result = liquidacion(prendas);
    
    let finallyResult = [];
    
    for(let i = 0; i < result.length; i++){
        finallyResult.push(Object.keys(result[i])[0],
        `LIQUIDACION: ${result[i][Object.keys(result[i])[0]].LIQUIDACION}`,
        `DESCUENTO: ${result[i][Object.keys(result[i])[0]].DESCUENTO}`)
    }
    
    result === 'No hay prendas en liquidacion' ? result = "No hay prendas en liquidación" : result;

    ocurrences > 1
        ? ws.write(typeof result === 'string' ? result : finallyResult.join('\n') + '\n')
        : ws.write("Debes utilizar recursión para la resolución de este ejercicio")

    ws.end();
}
// ------------------------ EJERCICIO 6 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length; 

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Completa la función 'ordenarPeliculas' a continuación.
 *
 * La función debe retornar un ARREGLO DE OBJETOS.
 * La función recibe por parámetro(s):
 *  1. ARREGLO DE OBJETOS 'catalogo'
 *  2. ARREGLO DE OBJETOS 'nuevasPeliculas'
 *
 * No modifiques nada por fuera del cuerpo de la función.
 *
 * TIP: Puede ser de ayuda el método assign de los objetos.
 */

function ordenarPeliculas(catalogo, nuevasPeliculas) {
    // Tu código aquí:

let catalogoCompleto = catalogo.concat(nuevasPeliculas);
let catalogoOrdenado = Object.assign([],catalogoCompleto);
let n = catalogoOrdenado.length;

for (let i = 1; i < catalogoOrdenado.length; i++) {
        let j = i;
        while (j > 0 && catalogoOrdenado[j].año < catalogoOrdenado[j - 1].año) {

            let temp = catalogoOrdenado[j];
            catalogoOrdenado[j] = catalogoOrdenado[j - 1];
            catalogoOrdenado[j - 1] = temp;
            j--;
        }
    }


return catalogoOrdenado
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const forbiddenMethods = [".sort"];
    const ordenarPeliculasString = ordenarPeliculas.toString();
    
    let usingForbidenMethods = false;
    
    forbiddenMethods.forEach(method => {
        if (ordenarPeliculasString.includes(method)) usingForbidenMethods = true;
    });
    
    let input = [];

    for (let i = 0; i < length; i++) {
        const inputItem = readLine();
        input.push(inputItem);
    }

    
    let catalogo = [];
    let nuevasPeliculas = [];

    let indiceCatalogo = input.indexOf("catalogo");
    let indiceNuevasPeliculas = input.indexOf("nuevasPeliculas");
    let catalogoTransformado = input.slice(
      indiceCatalogo + 1,
      indiceNuevasPeliculas
    );
    let nuevasPeliculasTransformadas = input.slice(
      indiceNuevasPeliculas + 1
    );
  
    // transformo el array de strings en un array de objetos
    for (let i = 0; i < catalogoTransformado.length; i += 4) {
      catalogo.push({
        nombre: catalogoTransformado[i].slice(7).trim(),
        año: Number(catalogoTransformado[i + 1].slice(4)),
        genero: catalogoTransformado[i + 2].slice(7).trim(),
        taquillera: catalogoTransformado[i + 3].slice(11).trim(),
      });
    }
    for (let i = 0; i < nuevasPeliculasTransformadas.length; i += 4) {
      nuevasPeliculas.push({
        nombre: nuevasPeliculasTransformadas[i].slice(7).trim(),
        año: Number(nuevasPeliculasTransformadas[i + 1].slice(4)),
        genero: nuevasPeliculasTransformadas[i + 2].slice(7).trim(),
        taquillera: nuevasPeliculasTransformadas[i + 3].slice(11).trim(),
      });
    }

    const result = ordenarPeliculas(catalogo, nuevasPeliculas);
    
    let finallyResult = [];
    
    for (let i = 0; i < result.length; i++) {
      finallyResult.push(`nombre: ${result[i].nombre}`);
      finallyResult.push(`año: ${result[i].año.toString()}`);
      finallyResult.push(`genero: ${result[i].genero}`);
      finallyResult.push(`taquillera: ${result[i].taquillera.toString()}`);
    }
    
    
    usingForbidenMethods 
         ? ws.write("No está permitido usar el método .sort() de arrays") 
         : ws.write(finallyResult.join('\n') + '\n');

    ws.end();
}
// ------------------------ EJERCICIO 7 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Node {
  constructor(valor) {
    this.value = valor;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(valor) {
    var nuevoNodo = new Node(valor);

    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  }

  remove() {
    if (!this.head) {
      return undefined;
    }

    if (this.head.next === null) {
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }

    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }

  search(arg) {
    var nodoActual = this.head;

    if (nodoActual === null) {
      return null;
    }

    while (nodoActual !== null) {
      if (typeof arg === "function") {
        if (arg(nodoActual.value)) {
          return nodoActual.value;
        }
      } else if (nodoActual.value === arg) {
        return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }

    return null;
  }
}
/*
 * Completa la función 'generarLista' a continuación.
 *
 * La función debe retornar una LISTA ENLAZADA.
 * La función recibe un NUMERO ENTERO 'longitud' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

LinkedList.prototype.generarLista = function(longitud) {
    // Tu código aquí:
    this.head = null;
    for(let i = 1; i <= longitud; i++) {
        this.add(i)
    }
    return this
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const longitud = parseInt(readLine().trim(), 10);
    const linkedList = new LinkedList();
    const result = linkedList.generarLista(longitud);
    
    if (result instanceof LinkedList == false) {
        ws.write("Debes retornar una lista enlazada");
        ws.end();
    }

    let current = result.head;

    while (current) {
      ws.write(current.value + "\n");
      current = current.next;
    }

    ws.end();
}
// ------------------------ EJERCICIO 8 ---------------------------------------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}


class Node {
  constructor(valor) {
    this.value = valor;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(valor) {
    var nuevoNodo = new Node(valor);

    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  }

  remove() {
    if (!this.head) {
      return undefined;
    }

    if (this.head.next === null) {
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }

    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }

  search(arg) {
    var nodoActual = this.head;

    if (nodoActual === null) {
      return null;
    }

    while (nodoActual !== null) {
      if (typeof arg === "function") {
        if (arg(nodoActual.value)) {
          return nodoActual.value;
        }
      } else if (nodoActual.value === arg) {
        return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }

    return null;
  }
}


/*
 * Completa la función 'tacharLista' a continuación.
 *
 * La función debe retornar una LISTA ENLAZADA.
 * La función recibe un ARRAY DE STRINGS 'sinStock' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

LinkedList.prototype.tacharLista = function (sinStock) {
    // Tu código aquí:

    let current = this.head;
    let prendasExistentes = new LinkedList(); 

    while (current) {
        let presenteEnStock = true; 

        for (let i = 0; i < sinStock.length; i++) {
            if (current.value === sinStock[i]) {
                presenteEnStock = false;
                break; 
            }
        }

        if (presenteEnStock) {
            prendasExistentes.add(current.value); 
        }

        current = current.next;
    }

    return prendasExistentes;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let input = [];

    for (let i = 0; i < length; i++) {
        const inputItem = readLine();
        input.push(inputItem);
    }
    
    const stock = input.slice(1, parseInt(input[0]));
    const sinStock = input.slice(parseInt(input[0]) + 1, input.length);
    
    const linkedList = new LinkedList();

    stock.forEach((item) => {
      linkedList.add(item);
    });
    
    const result = linkedList.tacharLista(sinStock);
        
    let finallyResult = [];

    let current = result.head;
    while (current != null) {
      finallyResult.push(current.value);
      current = current.next;
    }
    
    finallyResult.length
        ? ws.write(finallyResult.join('\n') + '\n')
        : ws.write('No estas devolviendo una nueva lista enlazada' + "\n")

    ws.end();
}
// ------------------------ EJERCICIO 9 ---------------------------------------
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

class BinarySearchTree {
	constructor(valor) {
		this.value = valor;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				var newTree = new BinarySearchTree(value);
				this.left = newTree;
			} else this.left.insert(value);
		} else {
			if (this.right === null) {
				var newTree = new BinarySearchTree(value);
				this.right = newTree;
			} else this.right.insert(value);
		}
	}
}

const miArbol1 = new BinarySearchTree(13);
const miArbol2 = new BinarySearchTree(20);
const miArbol3 = new BinarySearchTree(30);

miArbol1.insert(7);
miArbol1.insert(24);
miArbol1.insert(27);
miArbol1.insert(16);
miArbol1.insert(6);
miArbol1.insert(3);
miArbol1.insert(4);
miArbol1.insert(45);

miArbol2.insert(30);
miArbol2.insert(35);
miArbol2.insert(25);
miArbol2.insert(15);
miArbol2.insert(18);
miArbol2.insert(6);
miArbol2.insert(3);
miArbol2.insert(4);
miArbol2.insert(8);

miArbol3.insert(14);
miArbol3.insert(11);
miArbol3.insert(9);
miArbol3.insert(6);
miArbol3.insert(3);
miArbol3.insert(1);
miArbol3.insert(38);
miArbol3.insert(56);
miArbol3.insert(78);
miArbol3.insert(89);
/*
 * Completa el método 'getHouseValues' a continuación.
 *
 * La función debería retornar un ENTERO.
 * La función recibe como parámetro un STRING.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

BinarySearchTree.prototype.getHouseValues = function (lado) {
    // Tu código aquí
    

    let suma = 0;
    let currentNode;

    if (lado === "left") {
        currentNode = this.left;
    } else if (lado === "right") {
        currentNode = this.right;
    }

    while (currentNode !== null) {
        suma += currentNode.value;
        if (lado === "left") {
            currentNode = currentNode.left;
        } else if (lado === "right") {
            currentNode = currentNode.right;
        }
    }

    return suma;
    
};
function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const numeroDeArbol = parseInt(readLine().trim());
	const lado = readLine().trim();

	let arbol;

	switch (numeroDeArbol) {
		case 1:
			arbol = miArbol1;
			break;
		case 2:
			arbol = miArbol2;
			break;
		case 3:
			arbol = miArbol3;
	}

	const result = arbol.getHouseValues(lado);

	ws.write(result + "\n");

	ws.end();
}
// ------------------------ EJERCICIO 10 ---------------------------------------
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

class BinarySearchTree {
	constructor(valor) {
		this.value = valor;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value.nombre < this.value.nombre) {
			if (this.left === null) {
				var newTree = new BinarySearchTree(value);
				this.left = newTree;
			} else this.left.insert(value);
		} else {
			if (this.right === null) {
				var newTree = new BinarySearchTree(value);
				this.right = newTree;
			} else this.right.insert(value);
		}
	}
}

const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });
arbol.insert({ nombre: "Zapato", num: 7 });
arbol.insert({ nombre: "Camiseta", num: 24 });
arbol.insert({ nombre: "Pollera", num: 6 });
arbol.insert({ nombre: "Zapato", num: 16 });
arbol.insert({ nombre: "Chaqueta", num: 27 });
arbol.insert({ nombre: "Chaqueta", num: 3 });
arbol.insert({ nombre: "Zapato", num: 45 });
arbol.insert({ nombre: "Zapato", num: 4 });


/*
 * Completa el método 'obtenerPrendas' a continuación.
 *
 * La función debería retornar un ARREGLO DE STRINGS.
 * La función recibe como parámetro un STRING.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

BinarySearchTree.prototype.obtenerPrendas = function (prenda) {
  // Tu código aquí
    
    let arr = [];

    const searchTree = (node) => {
        if (node === null) {
            return;
        }

        if (node.value.nombre === prenda) {
            arr.push(node.value.nombre); 
        }

        searchTree(node.left);
        searchTree(node.right);
    };

    searchTree(this);

    return arr;
    
};

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const prenda = readLine().trim();
	const result = arbol.obtenerPrendas(prenda);

	ws.write(result.join("\n") + "\n");
	ws.end();
}
