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
  let pokemonList = [
    { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison'] },
    { name: 'charmander', height: 0.6, type: ['fire'] },
    { name: 'squirtle', height: 0.5, type: ['water'] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
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
  }

  return {
    getAll,
    add,
    addListItem,
  };
})();

pokemonRepository.add({ name: 'pikachu', height: 0.4, type: ['electric'] });

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  // document.write(
  //   pokemon.name +
  //     ' is about:' +
  //     pokemon.height +
  //     'm ' +
  //     'and its type is:' +
  //     pokemon.type
  // );
  // if (pokemon.height > 0.6) {
  //   document.write(' ... WOW! that is big');
  // }
  // document.write('<br><br>');
});
