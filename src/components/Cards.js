import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../containers/Card';
import './style/Cards.scss';

class Cards extends Component {

  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="Cards" >
        {
          movies.map(movie => (
            <Card  key={movie.id} {...movie} />
          ))
        }
      </div>
    )
  }
}

Cards.propTypes = {
  getMovies: PropTypes.func.isRequired,
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