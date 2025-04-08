let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

async function getPokemons() {
    let response = await fetch(BASE_URL);
    let responseToJson = await response.json()
    console.log(responseToJson);
    
}

/* async function onloadFunc() {
    let userResponse = await getAllUsers("user")
    let userKeysArray = Object.keys(userResponse) 
    let contentRef = document.getElementById('content')
    for (let index = 0; index < userKeysArray.length; index++) {    
        users.push(                                                
            {
                id : userKeysArray[index],                          
                info : userResponse[userKeysArray[index]]         
            }
        )
        contentRef.innerHTML +=
    }
} */