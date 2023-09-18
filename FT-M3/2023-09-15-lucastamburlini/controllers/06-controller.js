const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

    6️⃣ ***** EJERCICIO 6 ***** - mostrarLaEdadMedia 6️⃣:

   🟢 Debes de sacar la edad media de todos los personajes que se encuentran en la serie. RECUERDA QUE DEBE SER UN VALOR ENTERO
   🟢 Si la media no existe, arrojar un error que diga: "No tenemos valores".
      
    📌 Investigar el método "Math.trunc".

   📢 PUNTOS A TENER EN CUENTA 📢
   1) Recuerden que la media se saca sumando la edad de cada personaje, dividido la suma total de personajes.
   2) Debemos encontrar la manera que la media nos dé un numero entero
*/

const mostrarLaEdadMedia = () => {
  // Tu código aquí
  let media = 0;
  if (utils.personajes.length === 0) throw new Error("No tenemos valores")
  for (let i = 0; i < utils.personajes.length; i++) {
    media += utils.personajes[i].edad
  }
  return Math.trunc(media / utils.personajes.length)
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = mostrarLaEdadMedia;
