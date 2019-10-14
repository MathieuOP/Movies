import React from 'react';
import PropTypes from 'prop-types';
import './Category.scss';

const Category = ({ filterMovies, selected, category}) => {
    const handleClick = (e) => {
        const category = e.currentTarget.textContent;
        filterMovies(category);
    };

    return (
        <div 
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
};

export default Category;