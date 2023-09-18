const router = require("express").Router();
const mostrarLaEdadMedia = require("../controllers/06-controller");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣2️⃣ ***** EJERCICIO 12 ***** - GET /mostrarLaEdadMedia 1️⃣2️⃣:
  
  🟢 Integrar la función mostrarLaEdadMedia que desarrollaste previamente (Ejercicio 6) para obtener la media de la edad.
  🟢 Responder con el resultado de la operación, el formato debe ser: { results: 23000 }
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/mostrarLaEdadMedia", (req, res) => {
  // Tu código aquí
  try {
    const { edad } = req.body
    const media = mostrarLaEdadMedia(edad)
    res.status(200).json({ results: media })
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
