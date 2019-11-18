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
  constructor(name,hp,attack,defense){
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = []
  }
}



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


			// console.log("it works")
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

start()

let t1 = new Trainer('Red')
let poke1 = new Pokemon('bulbasaur')
let poke2 = new Pokemon('squirtle')

//
// // -----------API STUFF--------------
//
// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()
//
// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
//
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//
//   if (request.status >= 200 && request.status < 400){
//   data.forEach(movie => {
//   // Log each movie's title
//   console.log(movie.title)
// })
// } else {
//     console.log('error')
//   }
// }
//
// // Send request
// request.send()
