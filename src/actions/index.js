import { MOVIE_LIST, MOVIE_ITEM, SEARCH_BY, SORT_BY } from './types';
import axios from 'axios';

import { Endpoint } from '../config'; 

export const fetchMovies = (movieList) => {
  return {
    type: MOVIE_LIST,
    movieList
  }
};

export const fetchMoviesAsync = (params) => {
  return (dispatch) => {
    return axios.get(`${Endpoint}/movies`, {
        params: params
    })
      .then(response => {
        dispatch(fetchMovies(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchMovie = (movie) => {
    return {
      type: MOVIE_ITEM,
      movie
    }
  };

export const fetchMovieAsync = (id) => {
    return (dispatch) => {
        return axios.get(`${Endpoint}/movies/${id}`)
            .then(response => {
                dispatch(fetchMovie(response.data));
                dispatch(fetchMoviesAsync({
                    searchBy: 'genres',
                    filter: response.data.genres[0]
                }));
            })
            .catch(error => {
                throw(error);
            });
      };
};

export const searchBy = (filter) => {
    return {
        type: SEARCH_BY,
        filter
    }
};

export const sortBy = (filter) => {
    return {
        type: SORT_BY,
        filter
    }
};