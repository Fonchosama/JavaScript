// let pokemonList = [
//   { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison'] },
//   { name: 'charmander', height: 0.6, type: ['fire'] },
//   { name: 'squirtle', height: 0.5, type: ['water'] },
// ];

// for (let i = 0; i < pokemonList.length; i++) { //for example //
//   document.write(
//     pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') '
//   );
//   if (pokemonList[i].height > 0.6) {
//     document.write(' - wow, that is big!');
//   }
// }

let pokemonRepository = (function () {
  let pokemonList = [];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function addListItem(pokemon) {
    let nuevoElemento = document.querySelector('.lista-pokemon');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    nuevoElemento.appendChild(listItem);
    listItem.classList.add('lista');
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        pokemon.imgUrl = details.sprites.front_default;
        pokemon.height = details.height;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  let pokemonList = pokemonRepository.getAll();

  // pokemonRepository.getAll().forEach(function (pokemon) {
  // pokemonRepository.addListItem(pokemon); })

  pokemonList.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
