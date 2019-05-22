function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


requestAPI = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
           // a: data["form"][]
           x: data["abilities"][0]["ability"]["name"],
           y: data["abilities"][1]["ability"]["name"],
           c: data["stats"][0]["base_stat"],
           p: data["types"][0]["type"],
           t: data["abilities"][1]["base_experience"]
         }



            // user = {
            //     name: data['name'],
            //     username: data['login'],
            //     image: data['avatar_url'],
            //     repo_count: data['public_repos'],
            //     followers: data['followers']
            // }
        }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/nidorina", true);
    xhttp.send();
}

requestAPI()

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
