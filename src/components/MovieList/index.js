import React from 'react';
import './index.css';
import Button from '../Shared/Button';
import MovieItem from './MovieItem';
import { sortBy } from '../../actions';
import {connect} from "react-redux";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByDate: true,
            sortByRating: false,
        }
    }

    sortByDate = () => {
        this.setState((prevState) => {
            return { 
                sortByDate: !prevState.sortByDate,
                sortByRating: !prevState.sortByRating
            }
        });
        this.props.sortBy('release_date');
    }

    sortByRating = () => {
        this.setState((prevState) => {
            return { 
                sortByDate: !prevState.sortByDate,
                sortByRating: !prevState.sortByRating
            }
        });
        this.props.sortBy('vote_average');
    }

    render() {
        return (
            <React.Fragment>
                <div className="info-panel">
                    <span>{this.props.movies.total} movies found</span>
                    <div className="sort-films">
                        <span>sort by</span>
                        <Button 
                            name="release date"
                            className={this.state.sortByDate ? "clicked-button" : "unclicked-button"}
                            onClick={this.sortByDate}
                        />
                        <Button 
                            name="rating"
                            className={this.state.sortByRating ? "clicked-button" : "unclicked-button"}
                            onClick={this.sortByRating}
                        />
                    </div>
                </div>
                {
                    ( this.props.movies.data && this.props.movies.data.length )
                        ? (
                            <div className="movie-list">
                                {
                                    this.props.movies.data.map((movie) =>
                                        <MovieItem key={movie.id} id={movie.id} name={movie.title} img={movie.poster_path} year={movie.release_date} genre={movie.genres}/>
                                    )
                                }
                            </div>
                        )
                        : <div className="empty-page">No films found</div>
                }
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    sortBy,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);
