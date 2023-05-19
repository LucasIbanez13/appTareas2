const database = require('./data')
const argv = require('process').argv;
const accion = argv[2];

switch (accion) { 
    case "listar":
        console.log(`
 ----------------- 
 LISTADO DE TAREAS
 -----------------`)
        database.listarTareas()
        break;  
    case undefined:
        console.log("Tienes que pasar una accion")
        break;    
    default:
        console.log("No entiendo lo que quieres hacer");
        break;
}
 
