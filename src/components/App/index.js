import React, { useEffect } from 'react';
import { movies$ } from 'data/movies';
import './App.scss';

// components
import Cards from 'containers/Cards';
import Categories from 'containers/Categories';
import Pagination from 'containers/Pagination';
import NumDisplayCard from 'containers/NumDisplayCard';

const App = ({ getMovies }) => {
  useEffect(() => {
    let categoryMovies = [];

    movies$.then(movies => {
      const updateDataMovies = movies.map(data => {
        if (!categoryMovies.includes(data.category)) {
          categoryMovies.push(data.category);
        }
  
        return {
          ...data,
          statusLike: false,
          statusDislike: false,
          chosenCategory: true,
        }
      });
      
      const categoriesMovies = [
        {
          category: 'All',
          selected: true,
        },
        ...categoryMovies.map(data => ({category: data, selected: true})),
      ];

      getMovies(updateDataMovies, categoriesMovies);
    });
  }, [getMovies]);


  return (
    <div className="App">
      <Categories />
      <Cards />
      <NumDisplayCard />
      <Pagination />
    </div>
  )
};

export default App;
