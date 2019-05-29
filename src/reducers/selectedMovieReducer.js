import { MOVIE_ITEM } from '../actions/types';

export default function selectedMovieReducer(state = {}, action) {
  switch (action.type) {
    case MOVIE_ITEM:
      return action.movie;
    default:
      return state;
  }
}