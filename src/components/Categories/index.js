import React from 'react';
import PropTypes from 'prop-types';
import './Categories.scss';

import Category from 'containers/Category';

const Categories = ({ categoryMovies }) => (
    <div className="Categories">
        {
            categoryMovies.map((data) => (
                <Category key={data.category} {...data} />
            ))
        }
    </div>
)

Categories.propTypes = {
    categoryMovies: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
    })),
};

  
export default Categories;