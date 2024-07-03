let pokemonList = [
  { name: 'bulbasaur', height: '70cm', type: ['grass', 'poison'] },
  { name: 'charmander', height: '60cm', type: ['fire'] },
  { name: 'squirtle', height: '50cm', type: ['water'] },
];

for (i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') /'
  );
}
