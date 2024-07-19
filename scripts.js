let pokemonList = [
  { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison'] },
  { name: 'charmander', height: 0.6, type: ['fire'] },
  { name: 'squirtle', height: 0.5, type: ['water'] },
];

// for (let i = 0; i < pokemonList.length; i++) { //for example //
//   document.write(
//     pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') '
//   );
//   if (pokemonList[i].height > 0.6) {
//     document.write(' - wow, that is big!');
//   }
// }

pokemonList.forEach(function (pokemon) {
  document.write(
    pokemon.name +
      ' is about:' +
      pokemon.height +
      'm ' +
      'and its type is:' +
      pokemon.type
  );
  if (pokemon.height > 0.6) {
    document.write(' ... WOW! that is big');
  }
  document.write('<br><br>');
});
