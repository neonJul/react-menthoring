import React from 'react';
import './index.css';
import Button from '../Shared/Button';
import MovieItem from './MovieItem';

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
    }

    sortByRating = () => {
        this.setState((prevState) => {
            return { 
                sortByDate: !prevState.sortByDate,
                sortByRating: !prevState.sortByRating
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="info-panel">
                    <span>xxx movies found</span>
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
                <div className="movie-list">
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </div>
            </React.Fragment>
        )
    }
};

export default MovieList;