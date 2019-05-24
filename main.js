// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }
//
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }


requestAPI = (pokemon) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            poke = {
          name: data["name"],
           hp: data["stats"][2]["base_stat"],
           attack: data["stats"][0]["base_stat"],
           defense: data["stats"][0]["base_stat"],
           abilities: data["abilities"][0]["ability"]["name"],

         }


        console.log(poke);
        }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
    xhttp.send();
}



class Pokemon {
  constructor(hp, attack, defense, abilities) {
  	this.hp = hp;
    this.attack = attack;
    this.defense = defense;
  	this.abilities = abilities;
  }
}

class Trainer {
    constructor() {
        this.pokedex = []
    }
    get(name){

    }

    all(){
      
    }
    this.pokemon.push(pokemon)
}



displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    p1.innerText = user['followers']
    img.setAttribute('src', user['image'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(img)
    document.body.appendChild(cont)
}

// You are going to use this link
// https://raw.githubusercontent.com/bemsuero/test-repo/master/test_json.json
// and an AJAX call to display your own information on a web page. Use the Lemon framework to create the grid.
// https://appalaszynski.github.io/lemon/#
// //
