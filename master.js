class Trainer {
  constructor(name) {
    this.name = name
    this.team = []

  }

  equipPokemon(value) {
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
        // // sprite.src = `${chosenPoke.sprites}`
        // document.getElementById('sprite-container').appendChild(sprite)
        // let gifSprite = document.getElementsByClassName('carousel-image')
        // .src = `http://www.pokestadium.com/sprites/xy/${chosenPoke.name}.gif`
        // sprite.appendChild(gifSprite)

        for (let i in data.abilities) {
          let a = data.abilities[i].ability.name
          chosenPoke.abilities.push(a)
          console.log(a);

          let abilityList = document.getElementById('ability-list')

          let li = document.createElement('li')
          li.innerText = data.abilities[i].ability.name


          // let img = document.createElement('img')
          // img.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
          // abilityList.innerText = ` ${chosenPoke.name}`

          // abilityList.appendChild(li)
          // abilityList.ush.appendChild(img)
        }

        this.team.push(chosenPoke);
      }
    }
    isNaN(value) ? xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/name/${value}.json`)
    : xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/id/${value}.json`)
    xhttp.send()

    return isNaN(value) ? `${value} was added ${this.name}'s party!`
    : `Pokemon with ID: ${value} was added to ${this.name}'s list of pokemon!`
  }




  //-------------------
  all() {
    return this.team
  }
  //------------------
  get(name) {
    for (let i = 0; i < 5; i++) {
      if (this.team[i] == name) {
        console.log(this.team[i])
        // return this.team[i]
      }
    }
  }

}

class Pokemon {
  constructor(name) {
    this.name = name
    this.abilities = [] //chosenPoke.abilities.push(data.abilities[i].ability.name)
  }
}
noRepeatObj = 0
function pokeValues() {
  // var submitBtn = document.getElementById("query-submit")

  let trainerNameValue = document.getElementById("trainer-name").value
  let pokeNameValue1 = document.getElementById("poke1-input").value

  console.log(trainerNameValue.value);

  if (noRepeatObj === 0){
  t1 = new Trainer(trainerNameValue)
  noRepeatObj+=1
  }
  // after submit make trainer value read only
  t1.equipPokemon(pokeNameValue1)
  console.log(t1)

  console.log(pokeNameValue1)

  return trainerNameValue

}

statsList = document.getElementById('stats-list')

// ------------ ANIMATIONS -------------------
function start() {
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('container-grid');

  clicklightning.addEventListener("click", function() {

    clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clicklightning.style.display = "none";
      clicktitle.style.display = "block";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = "fade-out 1s ease-in, scale 4s ease-out";
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = "none";
      clickgrid.style.display = "none";

    }, 5000)

  })
}

// -------------START CODE ----------
start()

holdTrainerValue = null
let abilityList = document.getElementById('ability-list')
let submitBtn = document.getElementById('query-submit')

let formEvents = document.getElementById('queryPoke')
    .addEventListener("keydown", function(event) {
    // console.log(event.which)
    if (event.which === 13 || submitBtn.addEventListener('click', () => {
      console.log('clicked');
    })) {
      trainerValue = pokeValues()
      queryPoke = document.getElementById("queryPoke")
      queryTrainerName = document.getElementById("trainer-name")


      queryPoke.reset()

        queryTrainerName.placeholder = trainerValue

      queryTrainerName.style.color = "#fff000"
      queryTrainerName.style.opacity = "75%"
      queryTrainerName.setAttribute('readonly', true)
    }
  })
