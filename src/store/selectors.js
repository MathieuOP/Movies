const selectedMovies = (state) => (
    state.movies.filter(data => data.chosenCategory === true)
);


const filteringMovies = (state, action, categorySelectedFalse) => (
    state.movies.map(data => {
        if (action.category === 'All' && categorySelectedFalse === undefined) {
            return {
                ...data,
                chosenCategory: false,
            }
        }

        if (action.category === 'All' && categorySelectedFalse !== undefined) {
            return {
                ...data,
                chosenCategory: true,
            }
        }

        if (action.category === data.category) {
            return {
                ...data,
                chosenCategory: !data.chosenCategory,
            }
        }
        
        return data;
    })
);

const currentCategoriesSelected = (state, action, categorySelectedFalse, checkIfAllCategoryIsTrue) => (
    state.categoryMovies.map(data => {
        if (action.category !== 'All' && checkIfAllCategoryIsTrue === undefined) {
            return {
                ...data,
                selected: true,
            }
        }

        if (action.category === 'All' && categorySelectedFalse === undefined) {
            return {
                ...data,
                selected: false,
            }
        }

        if (action.category === 'All' && categorySelectedFalse !== undefined) {
            return {
                ...data,
                selected: true,
            }
        }

        if (action.category === data.category) {
            return {
                ...data,
                selected: !data.selected,
            }
        }
        
        if (action.category !== 'All' && data.category === 'All') {
            return {
                ...data,
                selected: false,
            }
        }

        return data;
    })
);

const getLengthMoviesSelected = (state, action, categorySelectedFalse) => (
    filteringMovies(state, action, categorySelectedFalse).filter(data => data.chosenCategory === true).length
);

const deleteMovieById = (state, action) => (
    state.movies.filter(movie => movie.id !== action.id)
)

const getMovieByCategory = (arrMovies, action) => (
    arrMovies.find(data => data.category === action.category)
)

const filteringMoviesByCategory = (state, action) => (
    state.categoryMovies.filter(data => data.category !== action.category)
)

const likeAMovie = (state, action) => (
    state.movies.map(movie => {
        if (movie.id === action.id) {
            return {
                ...movie,
                likes: (!movie.statusLike) ? movie.likes + 1 : movie.likes - 1,
                dislikes: (movie.statusDislike) ? movie.dislikes - 1 : movie.dislikes,
                statusLike: !movie.statusLike,
                statusDislike: (movie.statusDislike) ? false : movie.statusDislike,
            }
        }

        return movie;
    })
);

const dislikeAMovie = (state, action) => (
    state.movies.map(movie => {
        if (movie.id === action.id) {
            return {
                ...movie,
                likes: (movie.statusLike) ? movie.likes - 1 : movie.likes,
                dislikes: (!movie.statusDislike) ? movie.dislikes + 1 : movie.dislikes - 1,
                statusLike: (movie.statusLike) ? false : movie.statusLike,
                statusDislike: !movie.statusDislike,
            }
        }

        return movie;
    })
);

export default {
    selectedMovies,
    filteringMovies,
    currentCategoriesSelected,
    deleteMovieById,
    getMovieByCategory,
    filteringMoviesByCategory,
    likeAMovie,
    dislikeAMovie,
    getLengthMoviesSelected
}