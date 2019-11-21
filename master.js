
class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }

  equipPokemon_ID(name){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let resp = this.responseText
        let data = JSON.parse(resp)
        var chosenPoke = new Pokemon(data.name)
        chosenPoke.name = data.name
        chosenPoke.hp = data.stats[5].base_stat
        chosenPoke.attack = data.stats[4].base_stat
        chosenPoke.defense = data.stats[3].base_stat
        console.log(chosenPoke)

        for (let i in data.abilities){
          let a = data.abilities[i].ability.name
          a.replace('-',' ').charAt(0).toUpperCase()
          chosenPoke.abilities.push(a)
        }
      }
    }
    xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${name}.json`, true);
    xhttp.send();
  }
  //-------------------
  all() {
    return this.team
  }
  //------------------
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
  constructor(name,hp,attack,defense){
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = []
  }
}

// ----------- TRUE API POKEDEX -----------------
//
abilityList = document.getElementById('ability-list')
statsList = document.getElementById('stats-list')

// queryPokemonAPI = async () => {
  // pokeNum = prompt("Enter pokemon ID: ")
//   let randPoke = Math.floor(Math.random() * 100) + 1
// const url = `https://fizal.me/pokeapi/api/v2/id/${randPoke}.json`
//   fetch(url)
//     .then( resp => {
//       return resp.json()
//     })
//     .then( data => {
//         console.log(data)
//          let pokemon = new Pokemon(data.name)
//           pokemon.name = data.name
//           pokemon.hp = data.stats[5].base_stat
//           pokemon.attack = data.stats[4].base_stat
//           pokemon.defense = data.stats[3].base_stat
//
//
//
//




//       )
//
//         // box = document.createElement()
// }

// ------------ ANIMATIONS -------------------
function start(){
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('container-grid');

  clicklightning.addEventListener("click", function() {

		clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
			clicklightning.style.display = "none";
      clicktitle.style.display = "block";
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

let t1 = new Trainer('Red')
// let poke1 = new Pokemon('bulbasaur')
// let poke2 = new Pokemon('squirtle')
