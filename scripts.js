let pokemonList = [
  { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison'] },
  { name: 'charmander', height: 0.6, type: ['fire'] },
  { name: 'squirtle', height: 0.5, type: ['water'] },
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') '
  );
  if (pokemonList[i].height > 0.6) {
    document.write(' - wow, that is big!');
  }
}
