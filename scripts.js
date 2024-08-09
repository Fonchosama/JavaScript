let pokemonRepository = (function () {
  let pokemonList = [];

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
    button.type.add
    listItem.appendChild(button);
    nuevoElemento.appendChild(listItem);
    listItem.classList.add('lista');
    button.addEventListener('click', function () {
    showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
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
        console.log(pokemon.imgUrl, pokemon.height);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(
        pokemon
      );
    });
  }

  function showModal(pokemon) {
    let modal = document.querySelector('#pokemon-modal');
    let modalTitle = modal.querySelector('.modal-title');
    let modalImage = modal.querySelector('.modal-img');
    let modalHeight = modal.querySelector('.modal-height');
  
    // Asignarr valores al modal
    modalTitle.innerText = pokemon.name;
    modalImage.src = pokemon.imgUrl;
    modalHeight.innerText = 'Height: ' + pokemon.height;
  
    // Muestra el modal
    modal.style.display = 'block';
  
    // Cierra el modal cuando se hace clic en el botón de cerrar
    let closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', hideModal);
  
    // Cierra el modal cuando se hace clic fuera del contenido del modal
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        hideModal();
      }
    });
  
    // Cierra el modal cuando se presiona la tecla 'Esc'
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
      }
    });
  }
  
  function hideModal() {
    let modal = document.querySelector('#pokemon-modal');
    modal.style.display = 'none';
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

  pokemonList.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
