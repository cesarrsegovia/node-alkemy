//Importar express
const express = require('express');
const fs = require('fs')
//Creamos un servidor ejecutado express
const server = express();
//enviamos una peticion get
server.get('/', (req,res)=>{
    let data = fs.readFileSync('./usuarios.json')
    res.send({datos:JSON.parse(data)})
    // res.send("<h1>Hola mundo</h1>")
})
//Levantamos el servidor en el puerto 3000
server.listen(3000, () => {
    console.log("El servidor se esta escuchando en el puerto 3000");
})









// async function obtenerApi(){
//     try {
//         //realizar la solicitud de API
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

//         //Verificar si la respuesta es exitosa
//         if(!response.ok){
//             throw new Error(`Error: ${response.status}`);
//         }

//         //Convertir la respuesta en formato JSON
//         const data = await response;

//         //Mostrar los primeros 5 posts en la consola
//         console.log("Primeros 5 posts:", data);
//     } catch (error) {
//         console.error("Hubo un problema con la solicitud", error);
//     }
    
// }

// //Llamar la funcion
// obtenerApi();
