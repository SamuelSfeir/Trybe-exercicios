const pokemons = [
    { name: 'Pikachu', type: 'Elétrico', level: 25 },
    { name: 'Charizard', type: 'Fogo', level: 50 },
    { name: 'Bulbasaur', type: 'Planta', level: 10 },
    { name: 'Gyarados', type: 'Água', level: 40 },
    { name: 'Alakazam', type: 'Psíquico', level: 35 },
    { name: 'Snorlax', type: 'Normal', level: 50 },
    { name: 'Mewtwo', type: 'Psíquico', level: 70 },
    { name: 'Dragonite', type: 'Dragão', level: 55 },
    { name: 'Mew', type: 'Psíquico', level: 30 },
    { name: 'Articuno', type: 'Gelo', level: 60 },
    { name: 'Zapdos', type: 'Elétrico', level: 60 },
    { name: 'Moltres', type: 'Fogo', level: 60 },
    { name: 'Gengar', type: 'Fantasma', level: 45 },
    { name: 'Machamp', type: 'Lutador', level: 50 },
    { name: 'Lapras', type: 'Água', level: 35 },
    { name: 'Venusaur', type: 'Planta', level: 45 },
    { name: 'Blastoise', type: 'Água', level: 55 },
    { name: 'Golem', type: 'Pedra', level: 40 },
    { name: 'Arcanine', type: 'Fogo', level: 55 },
    { name: 'Jolteon', type: 'Elétrico', level: 40 },
  ];

// Exercício 01
const filterStrongPokemons = pokemons.filter(({level}) => level > 30);

// console.log(filterStrongPokemons);

// Exercício 02
function getStrongPokemonNames(pokemonArray) {
    const strongPokemons = pokemonArray
      .filter(pokemon => pokemon.nivel > 50) // Filtrar Pokémons com nível superior a 50
      .map(pokemon => pokemon.nome); // Mapear para obter apenas os nomes
  
    return strongPokemons;
  }
  
  const strongPokemonNames = getStrongPokemonNames(pokemons);

// Exercício 03
function comparePokemonLevels(pokemon1, pokemon2) {
    return pokemon1.nivel - pokemon2.nivel;
  }
  pokemons.sort(comparePokemonLevels);

// Exercício 04
function sortPokemons(pokemonArray) {
    function comparePokemons(a, b) {
      if (b.nivel !== a.nivel) {
        return b.nivel - a.nivel;
      }
      return a.nome.localeCompare(b.nome);
    }
  
    pokemonArray.sort(comparePokemons);
  
    return pokemonArray;
  }
  
  const sortedPokemons = sortPokemons(pokemons);