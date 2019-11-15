class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }

  equipPokemon(pTeam){
    this.team.push(pTeam)
  }
  all () {
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

let t1 = new Trainer('Red')
let poke1 = new Pokemon('bulbasaur')
let poke2 = new Pokemon('squirtle')
