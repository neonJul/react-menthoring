import React from 'react';
import MainTitle from '../Shared/MainTitle';
import SearchForm from '../Shared/SearchForm';
import Button from '../Shared/Button';

import './index.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterByTitle: true,
            filterByGenre: false,
        }
    }

    filterByTitle = () => {
        this.setState((prevState) => {
            return { 
                filterByTitle: !prevState.filterByTitle,
                filterByGenre: !prevState.filterByGenre
            }
        });
    }

    filterByGenre = () => {
        this.setState((prevState) => {
            return { 
                filterByTitle: !prevState.filterByTitle,
                filterByGenre: !prevState.filterByGenre
            }
        });
    }

    render() {
        return (
            <div className="header">
                <MainTitle>Find your movie</MainTitle>
                <SearchForm/>            
                <div className="button-wrapper">    
                    <span>Search By: </span>
                    <Button
                        name="Title" 
                        className={this.state.filterByTitle ? "clicked-button" : "unclicked-button"}                        
                        onClick={this.filterByTitle}
                    />
                    <Button 
                        name="Genre" 
                        className={this.state.filterByGenre ? "clicked-button" : "unclicked-button"}
                        onClick={this.filterByGenre}
                    />
                </div>
            </div>
        )
    }
};

export default Header;