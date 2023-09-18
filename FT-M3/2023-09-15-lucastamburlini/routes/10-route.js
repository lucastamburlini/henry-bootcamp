const router = require("express").Router();
const deletePersonaje = require("../controllers/04-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  🔟 * EJERCICIO 10 * - DELETE / Personaje 🔟:

  🟢 Integrar la función deletePersonaje que desarrollaste previamente (Ejercicio 4) para eliminar un personaje.
  🟢 Responder con un objeto con una propiedad "message" que sea igual al string `El personaje con el id ${id} fue 
  eliminado de forma exitosa`.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
  3) Revisa también los tests para saber por dónde vendrá el id del personaje que queremos eliminar
*/

router.delete("/personaje", (req, res) => {
  // Tu código aquí
  try {
    const { id } = req.body;
    deletePersonaje(id)
    res.status(200).json({
      message: `El personaje con el id ${id} fue eliminado de forma exitosa`
    })
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
