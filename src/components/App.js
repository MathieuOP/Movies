import React from 'react';
import './style/App.scss';

// components
import Cards from '../containers/Cards';
import Categories from '../containers/Categories';
import Pagination from '../containers/Pagination';
import NumDisplayCard from '../containers/NumDisplayCard';

const App = () => {
  return (
    <div className="App">
      <Categories />
      <Cards />
      <NumDisplayCard />
      <Pagination />
    </div>
  );
}

export default App;
