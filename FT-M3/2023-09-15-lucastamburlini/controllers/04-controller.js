const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ * EJERCICIO 4 * - deletePersonaje 4️⃣:

🟢 Busca un personaje por ID. Elimínalo de la base de datos y responde con el array de personajes teniendo en cuenta que no está más el que acabas de eliminar.
🟢 Si no existe el personaje con ese ID, arrojá un error que diga: `No existe el personaje con id: ${personajeID}`.
*/

const deletePersonaje = (personajeID) => {
  // Tu código aquí

  const personajesFiltrados = utils.personajes.filter((personaje) => personaje.id !== personajeID);

  if (personajesFiltrados.length === utils.personajes.length) {
    throw new Error(`No existe el personaje con id: ${personajeID}`);
  }

  utils.personajes = personajesFiltrados

  return utils.personajes;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = deletePersonaje;
