import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieItem extends React.Component {
    year = this.props.year.substr(0, this.props.year.indexOf('-'));

    render() {
        return (
            <NavLink className="movie-item" to={`/film/${this.props.id}`}>
                <img src={this.props.img}/>
                <div className="movie-info">
                    <p className="movie-name">{this.props.name}</p>
                    <span className="movie-year">{this.year}</span>
                </div>
                {/* {
                    this.props.genre.map(genre => <span>{`${genre} `}</span>)
                } */}
                {/* <span>{this.props.genre.substr(0, this.props.year.indexOf(' '))}</span> */}
            </NavLink>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie
    };
  };

export default connect(
    mapStateToProps,
  )(MovieItem);