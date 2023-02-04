import React, { useState, useEffect } from 'react';
import './pokemon.css';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
      .then(response => response.json())
      .then(data => setPokemon(data.results))
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter(p => p.name.includes(search))
    );
  }, [search, pokemon]);

  const fetchAbilities = async (pokemonUrl) => {
    const res = await fetch(pokemonUrl);
    const data = await res.json();
    setAbilities(data.abilities);
  }

  return (
    <div>
      <input
        className='buscarpk'
        type="text"
        placeholder="buscar Pokemon..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="pokemon-grid">
        {filteredPokemon.map((p, i) => {
          const pokemonUrl = p.url;
          fetchAbilities(pokemonUrl);
          return (
            <div key={i} className="pokemon-card" style={{ width: "500px"}}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                alt={p.name}
                style={{ width: "100%"}}
              />
              <p>{p.name}</p>
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
