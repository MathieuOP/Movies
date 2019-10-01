import React from 'react';
import PropTypes from 'prop-types';
import './style/Category.scss';

const Category = ({category, selected, filterMovies}) => {
    const handleClick = (e) => {
        const category = e.currentTarget.textContent;

        filterMovies(category);
       
    }

    return (
        <div 
            key={category}
            onClick={handleClick}
            className={selected ? 'category category--active' : 'category'}
        >
            {category}
        </div>
    )
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    filterMovies: PropTypes.func.isRequired,    
}
  

export default Category;