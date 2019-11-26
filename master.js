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
        chosenPoke.id = data.id
        chosenPoke.name = data.name
        chosenPoke.hp = data.stats[5].base_stat
        chosenPoke.attack = data.stats[4].base_stat
        chosenPoke.defense = data.stats[3].base_stat
        chosenPoke.sprites = data.sprites.front_default

        // let sprite = document.createElement('img')
        // sprite.src = `${chosenPoke.sprites}`
        // document.getElementById('sprite-container').appendChild(sprite)
        // let gifSprite = document.getElementsByClassName('carousel-image')
        // .src = `http://www.pokestadium.com/sprites/xy/${chosenPoke.name}.gif`
        // sprite.appendChild(gifSprite)

        let abilityList = document.getElementById('ability-list')
        let spriteContainer = document.getElementById('SpriteContainer')


        for (let i in data.abilities) {
          let ables = data.abilities[i].ability.name
          chosenPoke.abilities.push(ables)

          var able1 = document.createElement('li')
          var able2 = document.createElement('li')
          var able3 = document.createElement('li')

            able1.style.listStyleType = 'none';
            able2.style.listStyleType = 'none';
            able3.style.listStyleType = 'none';

          able1.innerText = data.abilities[0].ability.name
          able2.innerText = data.abilities[1].ability.name
          able3.innerText = data.abilities[2].ability.name
          // console.log(ables);

        }

          this.team.push(chosenPoke);
          let clickedOn = false;

          switch (partySize) {
            case 0:
            let pokeImg1 = document.getElementById('sprite-1')
            let displayStats1 = document.getElementById('displayInfo-1')
            pokeImg1.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
            pokeImg1.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"
            //
            let li1 = document.createElement('li')
            let li2 = document.createElement('li')
            let li3 = document.createElement('li')
            let p = document.createElement('p')

            li1.style.listStyleType = 'none';
            li2.style.listStyleType = 'none';
            li3.style.listStyleType = 'none';
            li1.innerText = `HP: ${chosenPoke.hp}`
            li2.innerText = `ATK: ${chosenPoke.attack}`
            li3.innerText = `DEF: ${chosenPoke.defense}`

            p.innerText = "ABILITIES: "

            li1.style.color= '#eee';
            li2.style.color= '#eee';
            li3.style.color= '#eee';
            p.style.color = '#eee';

            able1.style.color = '#eee';
            able2.style.color = '#eee';
            able3.style.color = '#eee';

            displayStats1.appendChild(li1)
            displayStats1.appendChild(li2)
            displayStats1.appendChild(li3)
            displayStats1.appendChild(p)
            displayStats1.appendChild(able1)
            displayStats1.appendChild(able2)
            displayStats1.appendChild(able3)


              pokeImg1.addEventListener("click", function() {
                  clickedOn = true;
                  if (clickedOn == true){
                    console.log("testing");
                    pokeImg1.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`



                  setTimeout(()=>{
                    pokeImg1.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                    clickedOn = false;
                  },1600)
                }
              }
            )
            break;
            case 1:
              let pokeImg2 = document.getElementById('sprite-2')
                let displayStats2 = document.getElementById('displayInfo-1')
              pokeImg2.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
              pokeImg2.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"

               li1 = document.createElement('li')
               li2 = document.createElement('li')
               li3 = document.createElement('li')
               p = document.createElement('p')

              li1.style.listStyleType = 'none';
              li2.style.listStyleType = 'none';
              li3.style.listStyleType = 'none';
              li1.innerText = `HP: ${chosenPoke.hp}`
              li2.innerText = `ATK: ${chosenPoke.attack}`
              li3.innerText = `DEF: ${chosenPoke.defense}`

              p.innerText = "ABILITIES: "

              li1.style.color= '#eee';
              li2.style.color= '#eee';
              li3.style.color= '#eee';
              p.style.color = '#eee';

              able1.style.color = '#eee';
              able2.style.color = '#eee';
              able3.style.color = '#eee';

              displayStats2.appendChild(li1)
              displayStats2.appendChild(li2)
              displayStats2.appendChild(li3)
              displayStats2.appendChild(p)
              displayStats2.appendChild(able1)
              displayStats2.appendChild(able2)
              displayStats2.appendChild(able3)

              pokeImg2.addEventListener("click", function() {
                  clickedOn = true;
                  if (clickedOn == true){
                    console.log("testing");
                    pokeImg2.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`

                  setTimeout(()=>{
                    pokeImg2.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                    clickedOn = false;
                  },1600)
                }
              }
            )

            break;
            case 2:
              let pokeImg3 = document.getElementById('sprite-3')
                let displayStats3 = document.getElementById('displayInfo-1')
              pokeImg3.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
              pokeImg3.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"

               li1 = document.createElement('li')
               li2 = document.createElement('li')
               li3 = document.createElement('li')
               p = document.createElement('p')

              li1.style.listStyleType = 'none';
              li2.style.listStyleType = 'none';
              li3.style.listStyleType = 'none';
              li1.innerText = `HP: ${chosenPoke.hp}`
              li2.innerText = `ATK: ${chosenPoke.attack}`
              li3.innerText = `DEF: ${chosenPoke.defense}`

              p.innerText = "ABILITIES: "

              li1.style.color= '#eee';
              li2.style.color= '#eee';
              li3.style.color= '#eee';
              p.style.color = '#eee';

              able1.style.color = '#eee';
              able2.style.color = '#eee';
              able3.style.color = '#eee';

              displayStats3.appendChild(li1)
              displayStats3.appendChild(li2)
              displayStats3.appendChild(li3)
              displayStats3.appendChild(p)
              displayStats3.appendChild(able1)
              displayStats3.appendChild(able2)
              displayStats3.appendChild(able3)

              pokeImg3.addEventListener("click", function() {
                  clickedOn = true;
                  if (clickedOn == true){
                    console.log("testing");
                    pokeImg3.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`

                  setTimeout(()=>{
                    pokeImg3.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                    clickedOn = false;
                  },1600)
                }
              }
            )



            break;
            case 3:
              let pokeImg4 = document.getElementById('sprite-4')
                let displayStats4 = document.getElementById('displayInfo-1')
              pokeImg4.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
              pokeImg4.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"

               li1 = document.createElement('li')
               li2 = document.createElement('li')
               li3 = document.createElement('li')
               p = document.createElement('p')

              li1.style.listStyleType = 'none';
              li2.style.listStyleType = 'none';
              li3.style.listStyleType = 'none';
              li1.innerText = `HP: ${chosenPoke.hp}`
              li2.innerText = `ATK: ${chosenPoke.attack}`
              li3.innerText = `DEF: ${chosenPoke.defense}`

              p.innerText = "ABILITIES: "

              li1.style.color= '#eee';
              li2.style.color= '#eee';
              li3.style.color= '#eee';
              p.style.color = '#eee';

              able1.style.color = '#eee';
              able2.style.color = '#eee';
              able3.style.color = '#eee';

              displayStats4.appendChild(li1)
              displayStats4.appendChild(li2)
              displayStats4.appendChild(li3)
              displayStats4.appendChild(p)
              displayStats4.appendChild(able1)
              displayStats4.appendChild(able2)
              displayStats4.appendChild(able3)

              pokeImg4.addEventListener("click", function() {
                  clickedOn = true;
                  if (clickedOn == true){
                    console.log("testing");
                    pokeImg4.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`

                  setTimeout(()=>{
                    pokeImg4.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                    clickedOn = false;
                  },1600)
                }
              }
            )


            break;
            case 4:
            let pokeImg5 = document.getElementById('sprite-5')
              let displayStats5 = document.getElementById('displayInfo-1')
            pokeImg5.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
            pokeImg5.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"

             li1 = document.createElement('li')
             li2 = document.createElement('li')
             li3 = document.createElement('li')
             p = document.createElement('p')

            li1.style.listStyleType = 'none';
            li2.style.listStyleType = 'none';
            li3.style.listStyleType = 'none';
            li1.innerText = `HP: ${chosenPoke.hp}`
            li2.innerText = `ATK: ${chosenPoke.attack}`
            li3.innerText = `DEF: ${chosenPoke.defense}`

            p.innerText = "ABILITIES: "

            li1.style.color= '#eee';
            li2.style.color= '#eee';
            li3.style.color= '#eee';
            p.style.color = '#eee';

            able1.style.color = '#eee';
            able2.style.color = '#eee';
            able3.style.color = '#eee';

            displayStats5.appendChild(li1)
            displayStats5.appendChild(li2)
            displayStats5.appendChild(li3)
            displayStats5.appendChild(p)
            displayStats5.appendChild(able1)
            displayStats5.appendChild(able2)
            displayStats5.appendChild(able3)

            pokeImg5.addEventListener("click", function() {
                clickedOn = true;
                if (clickedOn == true){
                  console.log("testing");
                  pokeImg5.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`

                setTimeout(()=>{
                  pokeImg5.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                  clickedOn = false;
                },1600)
              }
            }
          )

            break;
            case 5:
              let pokeImg6 = document.getElementById('sprite-6')
                let displayStats6 = document.getElementById('displayInfo-1')
              pokeImg6.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
              pokeImg6.style.animation = "drop-in 1s ease-in,fade-in 1s ease-in"

               li1 = document.createElement('li')
               li2 = document.createElement('li')
               li3 = document.createElement('li')
               p = document.createElement('p')

              li1.style.listStyleType = 'none';
              li2.style.listStyleType = 'none';
              li3.style.listStyleType = 'none';
              li1.innerText = `HP: ${chosenPoke.hp}`
              li2.innerText = `ATK: ${chosenPoke.attack}`
              li3.innerText = `DEF: ${chosenPoke.defense}`

              p.innerText = "ABILITIES: "

              li1.style.color= '#eee';
              li2.style.color= '#eee';
              li3.style.color= '#eee';
              p.style.color = '#eee';

              able1.style.color = '#eee';
              able2.style.color = '#eee';
              able3.style.color = '#eee';

              displayStats6.appendChild(li1)
              displayStats6.appendChild(li2)
              displayStats6.appendChild(li3)
              displayStats6.appendChild(p)
              displayStats6.appendChild(able1)
              displayStats6.appendChild(able2)
              displayStats6.appendChild(able3)

              pokeImg6.addEventListener("click", function() {
                  clickedOn = true;
                  if (clickedOn == true){
                    console.log("testing");
                    pokeImg6.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}-2.gif`

                  setTimeout(()=>{
                    pokeImg6.src = `https://projectpokemon.org/images/normal-sprite/${chosenPoke.name}.gif`
                    clickedOn = false;
                  },1600)
                }
              }
            )

            break;
            default:
              console.log("Default switch-case activated");
          }

              partySize += 1
              console.log("party size: ",partySize);
      }
    }
    isNaN(value) ? xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/name/${value}.json`) :
      xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/id/${value}.json`)
    xhttp.send()

    return isNaN(value) ? `${value} was added ${this.name}'s party!` :
      `Pokemon with ID: ${value} was added to ${this.name}'s list of pokemon!`
  }


  //-------------------
  all() {
    return this.team
  }

  //------------------
  get(value) {
    for (let i in this.team) {
      // console.log(this.team[i])
      if (this.team[i].name == value) {

        return this.team[i]
      } else if (this.team[i].id == value){
      return this.team[i]
      }
    }
  }
}

var partySize = 0
//--------------------------
class Pokemon {
  constructor(name) {
    this.name = name
    this.abilities = [] //chosenPoke.abilities.push(data.abilities[i].ability.name)
  }
}

//------------------------------
noRepeatObj = 0

function pokeValues() {

  let trainerNameValue = document.getElementById("trainer-name").value
  let pokeNameValue = document.getElementById("poke1-input").value

  if (noRepeatObj === 0) {
    t1 = new Trainer(trainerNameValue)
    noRepeatObj += 1
  }


    t1.equipPokemon(pokeNameValue)
    console.log("pokemon equiped");

  return trainerNameValue
}




// ------------ ANIMATIONS -------------------
function start() {
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('title-grid');
  let collapseableGrid = document.getElementById('collapseable-grid');

  clicklightning.addEventListener("click", function() {

    clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clicklightning.style.display = "none";
      clicktitle.style.display = "flex";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = "fade-out 1s ease-in, scale 4s ease-out";
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = "none";
      clickgrid.style.display = "none";
      clicktitle.remove()
      clickgrid.remove()

      collapseableGrid.style.display = "flex"
      collapseableGrid.style.animation = "fade-in 1s ease-in"
    }, 5000)

  })
}

// -------------START CODE ----------
start()

holdTrainerValue = false

statsList = document.getElementById('stats-list')
let abilityList = document.getElementById('ability-list')
let submitBtn = document.getElementById('query-submit')

let formEvents = document.getElementById('queryPoke')
  .addEventListener("keydown", function(event) {
    // console.log(event.which)

    // ----SUBMIT ON ENTER OR CLICKED BUTTON
    if (event.which === 13) {
      trainerValue = pokeValues()
      queryPoke = document.getElementById("queryPoke")
      queryTrainerName = document.getElementById("trainer-name")


      queryPoke.reset()
      // after submit make trainer value read only
      if (holdTrainerValue == false){
      queryTrainerName.placeholder = trainerValue
      holdTrainerValue = true
      }

      queryTrainerName.style.color = "#fff000"
      queryTrainerName.style.opacity = "75%"
      queryTrainerName.setAttribute('readonly', true)
    }
  })
