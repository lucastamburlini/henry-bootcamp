$.ajax({
  type: "GET",
  url: "http://localhost:3000/usuarios",
  success: (data) => {
    console.log(data);
  },
});

// ---> $.get("https://jsonplaceholder.typicode.com/users", (data) => {});

// $.ajax({
//   type: "DELETE",
//   url: "http://localghost:3000/usuarios/usuario1",
//   success: "Se elimino al usuario",
// });

// Event Handler
$(".boton").on("click", function () {
  // $.ajax({
  //   type: "GET",
  //   url: "https://pokeapi.co/api/v2/pokemon/ditto",
  //   success: (data) => {
  //     console.log(data);
  //     let info = document.createElement("h1");
  //     info.textContent = `Pokemon: ${data.name}`;

  //     let info2 = document.createElement("h2");
  //     info2.textContent = `Id: ${data.id}`;

  //     let info3 = document.createElement("p");
  //     info3.textContent = `Type: ${data.types[0].type.name}`;

  //     $("#respuesta").append(info);
  //     $("#respuesta").append(info2);
  //     $("#respuesta").append(info3);
  //   },
  // });
  $.get("https://pokeapi.co/api/v2/pokemon/ditto", (data) => {
    console.log(data);
    let info = document.createElement("h1");
    info.textContent = `Pokemon: ${data.name}`;

    let info2 = document.createElement("h2");
    info2.textContent = `Id: ${data.id}`;

    let info3 = document.createElement("p");
    info3.textContent = `Type: ${data.types[0].type.name}`;

    $("#respuesta").append(info);
    $("#respuesta").append(info2);
    $("#respuesta").append(info3);
  });
});
