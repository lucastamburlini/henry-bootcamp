const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  2️⃣ ***** EJERCICIO 2 ***** - filtroPorEdad 2️⃣:
  
  🟢 Necesitamos que devuelvas los personajes en la base de datos que tengan una edad menor o igual a la que te pasan por parámetro.
  🟢 Si no hay coincidencias, necesitamos que devuelvas un mensaje de error que diga: "No hay personajes igual o menores a la edad solicitada".

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los personajes a través de *utils.personajes*.
  2) Recibirás la edad por parámetro.
*/

const filtroPorEdad = (edad) => {
  // Tu código aquí
  const personajesFiltrados = utils.personajes.filter((personaje) => personaje.edad <= edad)
  if (personajesFiltrados.length > 0) {
    return personajesFiltrados
  } else {
    throw new Error("No hay personajes igual o menores a la edad solicitada")
  }
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = filtroPorEdad;
