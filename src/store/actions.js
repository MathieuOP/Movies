import types from './types';

const getMovies = () => ({
    type: types.GET_MOVIES,
});

const deleteMovie = (id, category) => ({
    type: types.DELETE_MOVIE,
    id,
    category,
});

const like = (id) => ({
    type: types.LIKE,
    id,
});

const dislike = (id) => ({
    type: types.DISLIKE,
    id,
});

const filterMovies = (category) => ({
    type: types.FILTER_MOVIES,
    category,
});

const pagination = (currentButton) => ({
    type: types.PAGINATION,
    currentButton,
});

const numberCardByPage = (number) => ({
    type: types.NUM_CARD_BY_PAGE,
    number,
});

export default {
    getMovies,
    deleteMovie,
    like,
    dislike,
    filterMovies,
    pagination,
    numberCardByPage,
}