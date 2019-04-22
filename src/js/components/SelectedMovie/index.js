import React from 'react';
import './index.css';
import Button from '../Shared/Button';

class SelectedMovie extends React.Component {
    render() {
        return(
            <div className="selected-movie">
                <Button name="Search" className="selected-movie-search"/>
                <div className="movie-description">
                    <img src={require('../MovieList/MovieItem/panda.jpg')}/>
                    <div className="movie-description-text">
                        <div className="part1">
                            <h3>Movie Name</h3>
                            <span>4.3</span>
                        </div>
                        <div className="part2">
                            <span>year</span>
                            <span>duration</span>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                             PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedMovie;