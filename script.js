fetch("https://pokeapi.co/api/v2/pokemon/39/")
  .then((respuesta) => respuesta.json())
  .then((pokemon) => {
    let element = document.getElementById("elemento2");
    element.innerHTML = `<img id="taco" class="rounded" width="auto" src='${pokemon.sprites.other.dream_world.front_default}'><div class="card-body bg-dark"><h1 class="card-title text-uppercase">${pokemon.name} <span class="h6">${pokemon.base_experience} XP</span></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae assumenda ullam?</p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-dark text-white">${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}</li>
    <li class="list-group-item bg-dark text-white">${pokemon.weight}kg</li>
    <li class="list-group-item bg-dark text-white">0.${pokemon.height}m</li>
  </ul></div>`;
    console.log(pokemon);
  })
  .catch((err) => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon/2/")
  .then((response) => response.json())
  .then((pokemon2) => {
    let element2 = document.getElementById("elemento");
    element2.innerHTML = `<img id="tacos" class="rounded" width="auto" src='${pokemon2.sprites.other.dream_world.front_default}'><div class="card-body bg-dark"><h1 class="card-title text-uppercase">${pokemon2.name} <span class="h6">${pokemon2.base_experience} XP</span></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae assumenda sapojsapomcaps saokmapofma v osfkmapomf sacaksl ullam?</p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-dark text-white">${pokemon2.types[0].type.name} / ${pokemon2.types[1].type.name}</li>
    <li class="list-group-item bg-dark text-white">${pokemon2.weight}kg</li>
    <li class="list-group-item bg-dark text-white">0.${pokemon2.height}m</li>
    </ul>
    
    </div>`;
    console.log(pokemon2);
  })
  .catch((err) => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon/6/")
  .then((response) => response.json())
  .then((pokemon2) => {
    let element2 = document.getElementById("elemento3");
    element2.innerHTML = `<img id="tacos" class="rounded" width="auto" src='${pokemon2.sprites.other.dream_world.front_default}'><div class="card-body bg-dark"><h1 class="card-title text-uppercase">${pokemon2.name} <span class="h6">${pokemon2.base_experience} XP</span></h1><p>Lorem ipsum dolor sit amet consectetur saokmapofma v osfkmapomf sacaksl ullam?</p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-dark text-white">${pokemon2.types[0].type.name} / ${pokemon2.types[1].type.name}</li>
    <li class="list-group-item bg-dark text-white">${pokemon2.weight}kg</li>
    <li class="list-group-item bg-dark text-white">0.${pokemon2.height}m</li>
    </ul>
    
    </div>`;
    console.log(pokemon2);
  })
  .catch((err) => console.log(err));

var ale = Math.round(Math.random() * 150);
var ale2 = Math.round(Math.random() * 150);

function invocar(nu, jelo) {
  var ur = "https://pokeapi.co/api/v2/pokemon/";
  ur = ur + nu;
  fetch(ur)
    .then((response) => response.json())
    .then((pokemon2) => {
      let element2 = document.getElementById("pokemon-1");
      element2.innerHTML = `<img class="rounded" width="100%" src='${
        pokemon2.sprites.other.dream_world.front_default
      }'><div class="card-body bg-dark"><h1 class="card-title text-uppercase">${
        pokemon2.name
      } <span class="h6">${
        pokemon2.base_experience
      } XP</span></h1><ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-white">${
        pokemon2.types[0].type.name
      } / ${pokemon2.types[1].type.name}</li>
      </ul></div>`;
      console.log(pokemon2);
    })
    .catch((err) => console.log(err));
  console.log(jelo);
  console.log(nu);
  console.log(ur);
}
invocar(ale, "hola");





function invocar1(nu, jelo) {
  var ur = "https://pokeapi.co/api/v2/pokemon/";
  ur = ur + nu;
  fetch(ur)
    .then((response) => response.json())
    .then((pokemon2) => {
      let element2 = document.getElementById("pokemon-2");
      element2.innerHTML = `<img class="rounded" width="100%" src='${
        pokemon2.sprites.other.dream_world.front_default
      }'><div class="card-body bg-dark"><h1 class="card-title text-uppercase">${
        pokemon2.name
      } <span class="h6">${
        pokemon2.base_experience
      } XP</span></h1><ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-white">${
        pokemon2.types[0].type.name
      } / ${pokemon2.types[1].type.name}</li>
      </ul></div>`;
      console.log(pokemon2);
    })
    .catch((err) => console.log(err));
  console.log(jelo);
  console.log(nu);
  console.log(ur);
}
invocar1(ale2, "hola");

function js_style() {
  var ale = Math.round(Math.random() * 150);
var ale2 = Math.round(Math.random() * 150);
  invocar(ale, "hola");
  invocar1(ale2, "hola");
}

//  function consultarPokemon(id, num) {
//    fetch("https://pokeapi.co/api/v2/pokemon/${id}")
//      .then((response) => response.json())
//      .then((pokemon) => crearPokemon(pokemon, num));
//  }

// function consultarPokemones() {
//   let primerID = Math.round(Math.random() * 150);
//   let segundoID = Math.round(Math.random() * 150);

// }

// function crearPokemon(pokemon, num) {
//   let item = lista.querySelector("#pokemon-${num}");

//   let imagen = item.getElementsByTagName("img")[0];
//   imagen.setAttribute("src", pokemon.sprites.front_default);

//   let nombre = item.getElementsByTagName("p")[0];
//   nombre.textContent = pokemon.name;
// }

// consultarPokemon();
/*
const search_term = document.getElementById("search_q");
const search_btn = document.getElementById("search-btn");

// api https://pokeapi.co/docs/v2#pokemon
const getPokemonData = async (term) => {
  document.getElementById("show_error").classList.remove("show");
  document.getElementById("show_error").classList.add("hidden");

  const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
  const response = await fetch(url);

  if (response.status == 404 || response.statusText == "Not Found") {
    document.getElementById("show_error").classList.add("show");
    document.getElementById("show_error").classList.remove("hidden");
    return;
  }

  const pokemon = await response.json();
  debugger;

  // update ui with data
  document
    .getElementById("update_img")
    .setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  document.getElementById("update_name").innerHTML = pokemon.name;
  document.getElementById(
    "update_candy_title"
  ).innerHTML = `${pokemon.name} Candy`;
  document.getElementById("update_hp").innerHTML = `HP ${Math.floor(
    Math.random() * pokemon.stats[0].base_stat + 1
  )}/${pokemon.stats[0].base_stat}`;
  document.getElementById(
    "update_cp"
  ).innerHTML = `XP ${pokemon.base_experience}`;
  document.getElementById(
    "update_type"
  ).innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`;
  document.getElementById("update_weight").innerHTML = `${pokemon.weight}kg`;
  document.getElementById("update_height").innerHTML = `0.${pokemon.height}m`;
  document.getElementById("update_stardust").innerHTML = Math.floor(
    Math.random() * 10000 + 1
  );
  document.getElementById("update_candy").innerHTML = Math.floor(
    Math.random() * 200 + 1
  );
};

search_btn.addEventListener("click", () => getPokemonData(search_term.value)); */
