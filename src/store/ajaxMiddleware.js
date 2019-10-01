import { movies$ } from '../data/movies';
import types from './types';

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case types.GET_MOVIES:
      
      return movies$
        .then(movie => {

          let categoryMovies = [];

          const movies = movie.map(data => {
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

          next({
            ...action,
            movies: movies,
            categoryMovies: [
              {
                category: 'All',
                selected: true,
              },
              ...categoryMovies.map(data => ({category: data, selected: true})),
            ],
          });
        })
    default:
      return next(action);
  }
};

export default ajaxMiddleware;