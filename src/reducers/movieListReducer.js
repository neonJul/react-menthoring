import { MOVIE_LIST } from '../actions/types';

export default function movieListReducer(state = [], action) {
  switch (action.type) {
    case MOVIE_LIST:
      return action.movieList;
    default:
      return state;
  }
}