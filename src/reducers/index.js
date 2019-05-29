import { combineReducers } from 'redux';
import movies from './movieListReducer';
import movie from './selectedMovieReducer';
import searchParams from './searchParamsReducer';

export default combineReducers({
    movies,
    movie,
    searchParams
});