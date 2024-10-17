var rutas=require("express").Router();
var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorId}=require("../bd/UsuariosBD");

rutas.get("/",async(req,res)=>{
   var usuariosValidos = await mostrarUsuarios();
   res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
   var usuarioValido = await buscarPorId(req.params.id);
   res.json(usuarioValido);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
   var usuarioGuardado = await nuevoUsuario(req.body);
   res.json(usuarioGuardado);
});

rutas.delete("/borrarUsuario/:id",async(req,res)=>{
   var usuarioBorrado = await borrarUsuario(req.params.id);
   res.json(usuarioBorrado);
});

module.exports=rutas;