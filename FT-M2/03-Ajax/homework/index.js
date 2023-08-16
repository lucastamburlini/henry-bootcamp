
$("#boton").on("click", () => {
    $.get("http://localhost:5000/amigos", (data) => {
        console.log(data)
        data.map(amigo => {
            let listAmigo = document.createElement("li")
            listAmigo.textContent = `${amigo.name}`
            $("#lista").append(listAmigo)
        })
    })
})

$("#search").on("click", () => {

    let amigoId = $("#input").val();
    console.log(amigoId);
    let url = `http://localhost:5000/amigos/${amigoId}`

    $.get(url, (amigo) => {
        $("#amigo").text(amigo.name)
    })

});

$("#delete").on("click", () => {

    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${$("#inputDelete").val()}`,
        success: (data) => {
            console.log(data);
            $("#success").text("Tu amigo fue borrado con éxito.")
        }
    })
})