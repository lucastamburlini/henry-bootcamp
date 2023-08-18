/* const whiteboard = require("./whiteboard")
const io = require("socket.io-client") // Si es una dependencia instalada dentro de nuestro package.json simplemente tenemos que buscarla sin un path, la llamamos e importamos desde nuestras dependencias instaladas. En este caso "socket.io-client" es una funcionabilidad que instalamos. Sirve para indicarnos dónde se está manipulando la pantalla.*/

import { whiteboard } from "./whiteboard";
import { io } from "socket.io-client";

let socket = io(window.location.origin);

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});

