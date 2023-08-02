# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10 - Da 10 por el contexto que se genera dentro de la función.
  console.log(a); // 8 - Los hijos pueden buscar dentro de los padres.
  var f = function (a, b, c) {
    b = a; // 8 se le asigna a través de "valor por referencia".
    console.log(b); // 8
    b = c; // 10 se le asigna el valor de b = a y luego cambia a b = c por el orden de ejecución.
    var x = 5;
    // Se puede cambiar el valor de "b" retornardo el valor "return = b;"
  };
  f(a, b, c); // 8, 9 , 10 se desprenden de los valores asignados en "c".
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // baz is not defined
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // Franco
  }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // 0
{}[0] // undefiend
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

El comportamiento de hoisting hace que las declaraciones de la variable a y la función foo sean elevadas al principio de la función test, permitiendo que se acceda a ellas antes de su declaración real en el código. Sin embargo, esto no aplica a las asignaciones, por lo que aunque la declaración de a es elevada, su asignación a 1 ocurre en su posición original.

```javascript
function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

El problema está en que JavaScript utiliza el concepto de hoisting para las variables declaradas con var, lo que significa que la declaración de var snack dentro de la función se mueve al principio del ámbito de la función, pero la asignación snack = "Friskies" se mantiene en su lugar.

Entonces, cuando se encuentra la expresión return snack; dentro del bloque if, JavaScript buscará la variable local snack dentro de la función, pero aún no se ha asignado un valor a esa variable en ese punto. Debido a esto, el valor que se devuelve es undefined. 

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

Se imprime "Aurelio De Rosa" debido a la llamada al método getFullname() dentro del objeto prop del objeto obj. Luego, se imprime "undefined" al invocar la función almacenada en la variable test(), ya que al hacerlo de esta manera se pierde el contexto y la referencia a this.fullname no está definida en ese contexto.

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // undefaind

console.log(test()); // undefaind
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

La razón de este orden es el comportamiento asíncrono de las funciones setTimeout() en JavaScript.

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); // 1 - 4 - 3 - 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
