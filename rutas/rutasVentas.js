var rutas = require("express").Router();
var { mostrarV,agregarV,modificarV,buscarV } = require("../bd/ventasBD");

rutas.get("/mostrar", async (req, res) => {
    var ventasValidas = await mostrarV();
    res.json(ventasValidas);
});

rutas.get("/buscar/:id", async (req, res) => {
    var ventaValida = await buscarV(req.params.id);
    res.json(ventaValida);
});

rutas.post("/agregar", async (req, res) => {
    var ventaGuardada = await agregarV(req.body);
    res.json(ventaGuardada);
});

rutas.delete("/modificar/:id", async (req, res) => {
    var ventaCancelada = await modificarV(req.params.id);
    res.json(ventaCancelada);
});

module.exports = rutas;