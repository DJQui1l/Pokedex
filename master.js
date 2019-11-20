class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }

  equipPokemon(teammate){




    this.team.push(teammate)
    console.log(`${teammate.name} has joined your party`)
  }
  all() {
    return this.team
  }
  get(name){
    for (let i = 0; i < 5;i++){
      if (this.team[i] == name){
        return this.team[i]
      }
    }

  }
}
//
class Pokemon {
  constructor(name){
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = []
  }
}

// ----------- TRUE API POKEDEX -----------------

abilityList = document.getElementById('ability-list')

queryPokemonAPI = async () => {
  pokeNum = prompt("Enter pokemon ID: ")
const url = `https://fizal.me/pokeapi/api/v2/id/${pokeNum}.json`
  fetch(url)
    .then( resp => {
      return resp.json()
    })
    .then( data => {
        console.log(data)
         let pokemon = {
          name: data.name,
          hp: data.stats[5].base_stat,
          atk: data.stats[4].base_stat,
          def: data.stats[3].base_stat,
          abilities: []
        }
        for (let i in data.abilities){
        console.log(data.abilities[i].ability.name)
        // abilities.push(data.abilities[i].ability.name)

        let li = document.createElement('li')
        li.innerText =`${data.abilities[i].ability.name}`
        li.style.color = "white"
        abilityList.appendChild(li)


        }
        // pokemon['name'] = data.name
          // console.log(data)
        // console.log(Pokemon)

        })

        // box = document.createElement()
}
queryPokemonAPI()


// ------------ ANIMATIONS ------------------------------
function start(){
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('container-grid');

  clicklightning.addEventListener("click", function() {

		clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
			clicklightning.style.display = "none";
      clicktitle.style.display = "block"
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
		},1004)

    setTimeout(() =>{
        clicktitle.style.animation = "fade-out 1s ease-in, scale 4s ease-out";
    },4000)

    setTimeout(() =>{
        clicktitle.style.display = "none";
        clickgrid.style.display = "none";

    },5000)

  })
}
//-----------------------------------------------------
start()

// let t1 = new Trainer('Red')
// let poke1 = new Pokemon('bulbasaur')
// let poke2 = new Pokemon('squirtle')

//
// // -----------API STUFF--------------

/*
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
for (i = 1; i <= 20;i++){
  request.open('GET', `https://fizal.me/pokeapi/api/v2/pokemon`, true)

  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.name)

    if (request.status >= 200 && request.status < 400){
    data.forEach(pokemon =>{
    // Log each movie's title
    console.log(pokemon.name)
  })
  } else {
      console.log('error')
    }
  }
}

// Send request
request.send()

*/
