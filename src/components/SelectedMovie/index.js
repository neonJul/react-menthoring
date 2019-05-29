import React from 'react';
import './index.css';
import Button from '../Shared/Button';
import { connect } from 'react-redux';
import {fetchMovieAsync, fetchMoviesAsync} from '../../actions/index';
import { NavLink } from 'react-router-dom';
import MovieList from "../MovieList";

class SelectedMovie extends React.Component {

    componentDidMount() {
        this.props.fetchMovieAsync(this.props.match.params.id);
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.id !== oldProps.match.params.id) {
            this.props.fetchMovieAsync(this.props.match.params.id);
        }
    }

    render() {
        return(
            <>
                <div className="selected-movie">
                    <NavLink className="movie-item" to="/">
                        <Button name="Search" className="selected-movie-search"/>
                    </NavLink>

                    <div className="movie-description">
                        <img src={this.props.movie.poster_path}/>
                        <div className="movie-description-text">
                            <div className="part1">
                                <h3>{this.props.movie.title}</h3>
                                <span>{this.props.movie.vote_average}</span>
                            </div>
                            <div className="part2">
                                <span>{this.props.movie.release_date}</span>
                            </div>
                            <p>{this.props.movie.overview}</p>
                        </div>
                    </div>
                </div>
                <MovieList/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie,
        movies: state.movies,
        searchParams: state.searchParams
    };
  };

const mapDispatchToProps = {
    fetchMovieAsync,
    fetchMoviesAsync
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectedMovie);