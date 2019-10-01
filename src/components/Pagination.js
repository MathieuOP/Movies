import React from 'react';
import PropTypes from 'prop-types';
import './style/Pagination.scss';

const Pagination = ({ pagination, startSlice, endSlice, moviesLength }) => {

    const handleClick = (currentButton) => () => {
        pagination(currentButton);
    }

    return (
        <div className="pagination">
            {
                startSlice > 0 && (
                    <button className="pagination__button pagination__button--left" onClick={handleClick('prev')}>Précédent</button>
                )
            }
            
            {
                endSlice < moviesLength && (
                    <button className="pagination__button pagination__button--right" onClick={handleClick('next')}>Suivant</button>
                )
            }
            
        </div>
    )
};

Pagination.propTypes = {
    pagination: PropTypes.func.isRequired,
    startSlice: PropTypes.number.isRequired,
    endSlice: PropTypes.number.isRequired,
    moviesLength: PropTypes.number.isRequired,
}


export default Pagination;