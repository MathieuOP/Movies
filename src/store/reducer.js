import types from './types';
import selectors from './selectors';

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
        case types.GET_MOVIES:

            return state = {
                ...state,
                movies: [
                    ...action.movies,
                ],
                categoryMovies: [
                    ...action.categoryMovies,
                ],
                moviesLength: action.movies.length,
            }
        case types.DELETE_MOVIE:
            const arrMoviesUpdated = selectors.deleteMovieById(state, action);
            const moviesLengthAfterDeleteAMovie = (selectors.selectedMovies(state).length - 1);
            
            return {
                ...state,
                movies: selectors.deleteMovieById(state, action),
                categoryMovies: (arrMoviesUpdated.length === 0) ? [] :
                selectors.getMovieByCategory(arrMoviesUpdated, action) === undefined ? 
                selectors.filteringMoviesByCategory(state, action) : state.categoryMovies,
                moviesLength: moviesLengthAfterDeleteAMovie,
                startSlice: moviesLengthAfterDeleteAMovie % state.numberCardByPage === 0 && state.startSlice !== 0
                ? state.startSlice - state.numberCardByPage : state.startSlice,
                endSlice: moviesLengthAfterDeleteAMovie % state.numberCardByPage === 0 && state.endSlice !== state.numberCardByPage ?
                state.endSlice - state.numberCardByPage : state.endSlice,
            }
        case types.LIKE:
            return {
                ...state,
                movies: selectors.likeAMovie(state, action),
                
                
            }
        case types.DISLIKE:
            return {
                ...state,
                movies: selectors.dislikeAMovie(state, action),
            }
        case types.FILTER_MOVIES:
            const categorySelectedFalse = state.categoryMovies.find(data => data.selected === false);
            const checkIfAllCategoryIsTrue = selectors.filteringMovies(state, action, categorySelectedFalse).find(data => data.chosenCategory === false);

            return {
                ...state,
                movies: selectors.filteringMovies(state, action, categorySelectedFalse),
                categoryMovies: selectors.currentCategoriesSelected(state, action, categorySelectedFalse, checkIfAllCategoryIsTrue),
                moviesLength: selectors.getLengthMoviesSelected(state, action, categorySelectedFalse),
                startSlice: 0,
                endSlice: state.numberCardByPage,
            }
        case types.PAGINATION: 
            const { currentButton } = action;

            return {
                ...state,
                startSlice: currentButton === 'prev' ? state.startSlice - state.numberCardByPage : state.startSlice + state.numberCardByPage,
                endSlice: currentButton === 'prev'  ? state.endSlice - state.numberCardByPage : state.endSlice + state.numberCardByPage,
            }
        case types.NUM_CARD_BY_PAGE:
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