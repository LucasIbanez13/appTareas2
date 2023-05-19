const fs = require('fs');

const leerJSON = function(){
    const tareas = fs.readFileSync('./data/tareas.json', 'utf-8')
    return tareas
} 

const parsearJSON = function(json){
    const jsonParseado = JSON.parse(json)
    return jsonParseado
}
 
module.exports = {
    listarTareas: (tareas = parsearJSON(leerJSON())) => {
   
      for (let i = 0; i < tareas.length; i++) {
        console.log(
          `- ${tareas[i].titulo} -> "${tareas[i].estado}"`
        );
      }
      return tareas;
    }
}