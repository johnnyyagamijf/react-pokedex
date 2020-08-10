import React, { useEffect, useState } from 'react';

import api from './services/api';
import { ignoreIds } from './services/Ignore';
import ListPokemons from './pages/ListPokemons';
import Header from './componentes/Header';
import Pagination from './componentes/Pagination';
import Loader from "react-loader-spinner";

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const total = 964;
  const limit = 20;
  const [pages, setPages] = useState([]);
  const  [loading, setLoading] = useState(true);
  const [currents, setCurrentPage] = useState({ currentPage: 1, offSetPage: 0 });

  useEffect(() => {
    async function onLoad() {
      const listPokemons = await getListPokemons();

      const totalPage = Math.ceil((total - ignoreIds.length) / limit);
      const arrayPages = [];

      for (let i = 1; i <= totalPage; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
        await getPokemonsForId(listPokemons)
    }
    onLoad();
  }, [currents.currentPage]);

  async function getListPokemons() {
    const response = await api.get(`/pokemon?offset=${currents.offSetPage}&limit=${limit}`);
    return response.data;
  }

  async function getPokemonsForId(listPokemons) {
    let list = [];
    for (let i = 0; i < listPokemons.results.length; i++) {
      try {
        const atributes = listPokemons.results[i].url.split('/');
        const id = (atributes[atributes.length - 1] !== '') ? atributes[atributes.length - 1] : atributes[atributes.length - 2];
        const exists = ignoreIds.find(x => x.toString() === id);

        if (!exists) {
         const response = await api.get(`/pokemon/${id}`)
            list.push(response.data)
          }
        }
      catch (err) {
        console.log('Ops ', err);
      }
    }
    setLoading(false);
    setPokemons(list);
  }

  async function onChangePage(numPage) {
    const offSet = numPage === 1 ? 0 : (numPage - 1) * 15;
    await setCurrentPage({ currentPage: numPage, offSetPage: offSet });
  }

  return (
    <>
      <Header onChangePage={onChangePage} />
      {
        loading ? (
        <div className="modal-item" >
            <Loader className="spinner"
              type="TailSpin"
              color="#ffcb05"
              height={100}
              width={100}
            />
        </div>) : 
        ( 
          
          <>
            <ul data-js="pokedex" className="pokedex">
              {
                pokemons.map(pokemon => (
                  <ListPokemons key={pokemon.id} pokemon={pokemon} />
                ))
              }
            </ul>
            <Pagination
              pages={pages}
              onChangePage={onChangePage}
              total={total}
              currentPage={currents.currentPage}
              setLoading={setLoading}
            />
          </>
        )}
    </>
  );
}

export default App;