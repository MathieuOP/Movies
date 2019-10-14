import {
    GET_MOVIES,
    DELETE_MOVIE,
    LIKE,
    DISLIKE,
    PAGINATION,
    FILTER_MOVIES,
    NUM_CARD_BY_PAGE
} from './types';

import {
    selectedMovies,
    filteringMovies,
    currentCategoriesSelected,
    deleteMovieById,
    getMovieByCategory,
    filteringMoviesByCategory,
    likeAMovie,
    dislikeAMovie,
    getLengthMoviesSelected
} from './selectors';

/**
 * Initial State
 */
const initialState = {
    movies: [],
    categoryMovies: [],
    startSlice: 0,
    endSlice: 4,
    moviesLength: 0,
    numberCardByPage: 4,
};
  
/**
 * Reducer
*/
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_MOVIES:
            return state = {
                ...state,
                movies: [
                    ...action.movies,
                ],
                categoryMovies: [
                    ...action.categoriesMovies,
                ],
                moviesLength: action.movies.length,
            }
        case DELETE_MOVIE:
            const arrMoviesUpdated = deleteMovieById(state, action);
            const moviesLengthAfterDeleteAMovie = (selectedMovies(state).length - 1);
            
            return {
                ...state,
                movies: deleteMovieById(state, action),
                categoryMovies: (arrMoviesUpdated.length === 0) ? [] :
                getMovieByCategory(arrMoviesUpdated, action) === undefined ? 
                filteringMoviesByCategory(state, action) : state.categoryMovies,
                moviesLength: moviesLengthAfterDeleteAMovie,
                startSlice: moviesLengthAfterDeleteAMovie % state.numberCardByPage === 0 && state.startSlice !== 0
                ? state.startSlice - state.numberCardByPage : state.startSlice,
                endSlice: moviesLengthAfterDeleteAMovie % state.numberCardByPage === 0 && state.endSlice !== state.numberCardByPage ?
                state.endSlice - state.numberCardByPage : state.endSlice,
            }
        case LIKE:
            return {
                ...state,
                movies: likeAMovie(state, action),
                
                
            }
        case DISLIKE:
            return {
                ...state,
                movies: dislikeAMovie(state, action),
            }
        case FILTER_MOVIES:
            const categorySelectedFalse = state.categoryMovies.find(data => data.selected === false);
            const checkIfAllCategoryIsTrue = filteringMovies(state, action, categorySelectedFalse).find(data => data.chosenCategory === false);

            return {
                ...state,
                movies: filteringMovies(state, action, categorySelectedFalse),
                categoryMovies: currentCategoriesSelected(state, action, categorySelectedFalse, checkIfAllCategoryIsTrue),
                moviesLength: getLengthMoviesSelected(state, action, categorySelectedFalse),
                startSlice: 0,
                endSlice: state.numberCardByPage,
            }
        case PAGINATION: 
            const { currentButton } = action;

            return {
                ...state,
                startSlice: currentButton === 'prev' ? state.startSlice - state.numberCardByPage : state.startSlice + state.numberCardByPage,
                endSlice: currentButton === 'prev'  ? state.endSlice - state.numberCardByPage : state.endSlice + state.numberCardByPage,
            }
        case NUM_CARD_BY_PAGE:
            const { number } = action;
            const { startSlice, endSlice, numberCardByPage } = state;
            const condition = numberCardByPage !== number;

            return {
                ...state,
                numberCardByPage: condition ? number : numberCardByPage,
                startSlice: condition ? 0 : startSlice,
                endSlice: condition ? number  : endSlice,
            }
        default:
            return state;
    }
};

export default reducer;