import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => (action.payload !== item.id))
            }
        case ADD_MOVIE:
            // we need an id value for the new movie
            // find the largest current movie id value, and increase it by 1
            const ids = state.movies.map(m => m.id);
            const max = Math.max(...ids);
            const newId = max + 1;
            const newMovie = { ...action.payload, id: newId };
            return {
                ...state,
                movies: [...state.movies, newMovie],
            }
        default:
            return state;
    }
}

export default reducer;