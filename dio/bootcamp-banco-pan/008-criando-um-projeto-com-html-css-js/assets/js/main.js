const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 6
let offset = 0
const maxRecord = 151

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons
      .map(
        pokemon => `
            <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
          
            <div class="detail">
              <ol class="types">
                ${pokemon.types
                  .map(type => `<li class="type ${type}">${type}</li>`)
                  .join('')}
              </ol>
              <img 
                src="${pokemon.photo}" 
                alt="${pokemon.name}" 
              />
            </div>
          </li>
        `
      )
      .join('')
    pokemonList.innerHTML += newHTML
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const quantityRecord = offset + limit
  if (quantityRecord >= maxRecord) {
    const newLimit = quantityRecord - offset
    loadPokemonItens(offset, newLimit)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})
