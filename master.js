
class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }


  statsList = document.getElementById('stats-list')

  equipPokemon_ID(name){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => { //made it an arrow function instead of anon function to keep 'this' bound to Trainer object
      if (xhttp.readyState == 4 && xhttp.status == 200) { //checks the readystate of xhttp
        let resp = xhttp.responseText
        let data = JSON.parse(resp)

        // console.log(data)

        let chosenPoke = new Pokemon(data.name)
        chosenPoke.name = data.name
        chosenPoke.hp = data.stats[5].base_stat
        chosenPoke.attack = data.stats[4].base_stat
        chosenPoke.defense = data.stats[3].base_stat
        chosenPoke.sprites = data.sprites.front_default

        // let sprite = document.createElement('img')
        // sprite.src = `${chosenPoke.sprites}`
        // document.getElementById('sprite-container').appendChild(sprite)

        let gifSprite = document.createElement('img')
        gifSprite.src = `http://www.pokestadium.com/sprites/xy/${chosenPoke.name}.gif`
        document.getElementById('sprite-container').appendChild(gifSprite)

        for (let i in data.abilities){
          let a = data.abilities[i].ability.name
          // a.replace('-',' ').charAt(0).toUpperCase()
          chosenPoke.abilities.push(a)


          let pudding = document.getElementById('ability-list')
          pudding.innerText= `HP: ${chosenPoke.hp}`
          abilityList.style.color= "white"
          // abilityList.appendChild(li)
        }


        this.team.push(chosenPoke);
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
        console.log(this.team[i])
        return this.team[i]
      }
    }
  }
}

class Pokemon {
  constructor(name){
    this.name = name
    this.abilities = [] //chosenPoke.abilities.push(data.abilities[i].ability.name)
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
