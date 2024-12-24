
// fetch method comes with a url and an option like method:get, post, pur or delete
// fetch (url, {option})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// this is the async try and catch method which could also be used to fetch data

/////// another method /////////

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


fetchData()

async function fetchData() {

    try {

        const pokemonName = document.getElementById('pokemon-name').value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById('pokemon-sprite')

        imgElement.src = pokemonSprite
        imgElement.style.display = 'block'
    }
    catch (error) {
        console.error(error)
    }
}