import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import colors from './services/index.json';
import api from './services/api';
import ListPokemons from './pages/ListPokemons';
import Header from './componentes/Header';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function onLoad() {
      const listPokemons = await getListPokemons();
      let list = [];
      for (let i = 0; i < listPokemons.length; i++) {
        try {
          const atributes = listPokemons[i].url.split('/');

          const id = (atributes[atributes.length - 1] !== '') ? atributes[atributes.length - 1] : atributes[atributes.length - 2];
          const response = await api.get(`/pokemon/${id}`);
          list.push(response.data)
        }
        catch (err) {
          console.log(err);
        }
      }
      setPokemons(list);
    }
    onLoad();
  }, []);

  async function getListPokemons() {
    const response = await api.get('/pokemon?offset=0&limit=300');
    return response.data.results;
  }
  return (
    <>
    <Header />
    <div className="container">
      <ul data-js="pokedex" className="pokedex">
        {
          pokemons.map(pokemon => (
            <ListPokemons key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </ul>
    </div>
    </>
    
  );
}

export default App;
