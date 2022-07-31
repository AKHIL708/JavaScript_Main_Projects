console.log("lets do it ")

// pokemon api :: > https://pokeapi.co/api/v2/pokemon?limit=190

async function data (){
    let y = document.getElementById("input").value
    let x = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((res)=> res.json())
    .then((data) => {
        let x = data.results[y].name
        document.getElementById("names").innerHTML = `Name : ${x} & position is : ${y}`
    })
    .catch((e)=> console.log(e))
}
