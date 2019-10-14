import React from 'react';
import Card from 'containers/Card';
import PropTypes from 'prop-types';
import './Cards.scss';

const Cards = ({ movies }) => (
  <div className="Cards" >
    {
      movies.map(movie => (
        <Card key={movie.id} {...movie} />
      ))
    }
  </div>
)

Cards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    statusLike: PropTypes.bool.isRequired,
    statusDislike: PropTypes.bool.isRequired,
    chosenCategory: PropTypes.bool.isRequired,
  })),
}

export default Cards;