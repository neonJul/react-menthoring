import React from 'react';

class MovieItem extends React.Component {
    render() {
        return (
            <div className="movie-item">
                <img src={require('./panda.jpg')}/>
                <div className="movie-info">
                    <p className="movie-name">Movie Name</p>
                    <span className="movie-year">year</span>
                </div>
                <span>genre</span>
            </div>
        );
    }
}

export default MovieItem;