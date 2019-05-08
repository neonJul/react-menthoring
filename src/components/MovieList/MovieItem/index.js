import React from 'react';

class MovieItem extends React.Component {
    render() {
        return (
            <div className="movie-item">
                <img src={this.props.img}/>
                <div className="movie-info">
                    <p className="movie-name">{this.props.name}</p>
                    <span className="movie-year">{this.props.year}</span>
                </div>
                <span>{this.props.genre}</span>
            </div>
        );
    }
}

export default MovieItem;