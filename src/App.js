import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import { Pagination, PaginationButton, PaginationItem } from './style';

import colors from './services/index.json';
import api from './services/api';
import ListPokemons from './pages/ListPokemons';
import Header from './componentes/Header';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(60);
  const [limit, setLimit] = useState(20);
  const [pages, setPages] = useState([]);
  const [currents, setCurrentPage] = useState({currentPage: 1, offSetPage: 0 });

  useEffect(() => {
    async function onLoad() {
      console.log('currents.currentPage', currents.currentPage)
      const listPokemons = await getListPokemons();
      const totalPage = Math.ceil(total / limit);
      const arrayPages = [];

      for (let i = 1; i <= totalPage; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
     await getPokemonsForId(listPokemons)
    }
    onLoad();
  }, [limit, currents.currentPage]);

  async function getPokemonsForId(listPokemons){
    let list = [];
    for (let i = 0; i < listPokemons.results.length; i++) {
      try {
        const atributes = listPokemons.results[i].url.split('/');
        const id = (atributes[atributes.length - 1] !== '') ? atributes[atributes.length - 1] : atributes[atributes.length - 2];
        const response = await api.get(`/pokemon/${id}`);

        list.push(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/10133.png
    setPokemons(list);
  }

  async function onChangePage(numPage){
    console.log('numPage', numPage);
    const offSet =  numPage == 1 ?  0 :  (numPage - 1) * 20;
    console.log('offSet', offSet);
     await setCurrentPage({currentPage: numPage, offSetPage: offSet});
  }
  
  async function getListPokemons() {
    const response = await api.get(`/pokemon?offset=${currents.offSetPage}&limit=${20}`);
    return response.data;
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
        {
          <Pagination>
            <div>Qtd {total}</div>
            <PaginationButton>
             {
               currents.currentPage > 1 && (
                <PaginationItem onClick={(e) => onChangePage(currents.currentPage - 1 )}>Previous</PaginationItem>
               )
             }
              {
                pages.map((page, index) => (
                  <PaginationItem
                  isSelect={page === currents.currentPage}
                  key={index}
                  onClick={(e) => onChangePage(page)}>{page}</PaginationItem>
                ))
              }
              {
                currents.currentPage < pages.length && (
                  <PaginationItem onClick={(e) => onChangePage(currents.currentPage  + 1 )}>Next</PaginationItem>
                )
              }
             </PaginationButton>
          </Pagination>
        }
      </div>
    </>

  );
}

export default App;
