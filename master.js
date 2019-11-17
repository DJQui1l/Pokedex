class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }

  equipPokemon(teammate){
    this.team.push(teammate)
    console.log(`${teammate.name} has joined your party`)
  }
  all () {
    return this.team
  }
  get(name){
    // for (let i = 0; i < this.team.length; i++)
    return this.team[name.name]
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

let t1 = new Trainer('Red')
let poke1 = new Pokemon('bulbasaur')
let poke2 = new Pokemon('squirtle')
