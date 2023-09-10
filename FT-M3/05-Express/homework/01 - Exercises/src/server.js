const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

let id = 1;

server.post("/posts", (req, res) => {
    const { author, title, contents } = req.body
    if (author && title && contents) {
        const publication = {
            id: id++,
            author,
            title,
            contents
        }
        publications.push(publication)
        res.status(200).json(publication)
    } else {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" })
    }
})

server.get("/posts", (req, res) => {
    const { author, title } = req.query
    if (author && title) {
        const filtered = publications.filter(publication => publication.author === author && publication.title === title)

        filtered.length
            ? res.status(200).json(filtered)
            : res.status(400).json({ error: "No existe ninguna publicación con dicho título y autor indicado" })

    } else {
        return res.status(400).json({ error: "No existe ninguna publicación con dicho título y autor indicado" })
    }
})

server.get("/posts/:author", (req, res) => {
    const { author } = req.params

    const filtered = publications.filter(publication => publication.author === author)

    filtered.length
        ? res.status(200).json(filtered)
        : res.status(400).json({ error: "No existe ninguna publicación del autor indicado" })

})

server.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, contents } = req.body
    if (title && contents && id) {
        let pubId = publications.find(publication => publication.id === Number(id))

        if (pubId) {
            pubId = { ...pubId, title, contents };
            res.status(200).json(pubId)
        } else {
            res.status(400).json({ error: "No se recibió el id correcto necesario para modificar la publicación" })
        }

    } else {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" })
    }
})


server.delete("/posts/:id", (req, res) => {
    const { id } = req.params;

    if (id) {
        let deleted = publications.filter((publication) => publication.id !== Number(id))

        !deleted
            ? res.status(400).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" })
            : res.status(200).json({ success: true })


    } else {
        res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" })
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
