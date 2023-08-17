
let botonHandler = function () {
    let lista = $("#lista");
    lista.empty();
    $.get("http://localhost:5000/amigos", (response) => {
        console.log(response)
        response.map(amigo => {
            let listAmigo = document.createElement("li")
            listAmigo.textContent = `${amigo.name} es tu amigo ${amigo.id}`
            $("#lista").append(listAmigo)
        })
    })
};

let searchHandler = function () {
    let amigoId = $("#input").val();
    if (amigoId) {
        $.get(`http://localhost:5000/amigos/${amigoId}`, (response) => {
            $("#amigo").html(`${response.name}`)
        });
    } else {
        $("#amigo").html("Ingresa un ID")
    }
}


let deleteHandler = function () {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${$("#inputDelete").val()}`,
        success: (response) => {
            console.log(response);
            $("#success").text("Tu amigo fue borrado con éxito.")
            botonHandler()
        }
    })
}

$("#boton").on("click", botonHandler)
$("#search").on("click", searchHandler);
$("#delete").on("click", deleteHandler)