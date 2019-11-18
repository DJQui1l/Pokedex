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
    // for (let i = 0; i < this.team.length; i++)
    return this.team
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




function start(){
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');

  clicklightning.addEventListener("click", function() {

		clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
			clicklightning.style.display = "none";
      clicktitle.style.display = "block"
      clicktitle.style.animation = "fade-in 1s ease-in";
			console.log("it works")
		},1004)
  })
}

start()

let t1 = new Trainer('Red')
let poke1 = new Pokemon('bulbasaur')
let poke2 = new Pokemon('squirtle')
