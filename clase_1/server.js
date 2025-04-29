async function obtenerDatos() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response;

        console.log(data);
        
    } catch (error) {
        console.error("Hubo un error con la solicitud", error)
    }
}

obtenerDatos();