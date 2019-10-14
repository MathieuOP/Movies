import {
    GET_MOVIES,
    DELETE_MOVIE,
    LIKE,
    DISLIKE,
    PAGINATION,
    FILTER_MOVIES,
    NUM_CARD_BY_PAGE
} from './types';

export const getMovies = (movies, categoriesMovies) => ({
    type: GET_MOVIES,
    movies,
    categoriesMovies,
});

export const deleteMovie = (id, category) => ({
    type: DELETE_MOVIE,
    id,
    category,
});

export const like = (id) => ({
    type: LIKE,
    id,
});

export const dislike = (id) => ({
    type: DISLIKE,
    id,
});

export const filterMovies = (category) => ({
    type: FILTER_MOVIES,
    category,
});

export const pagination = (currentButton) => ({
    type: PAGINATION,
    currentButton,
});

export const numberCardByPage = (number) => ({
    type: NUM_CARD_BY_PAGE,
    number,
});