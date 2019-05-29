import React from 'react';
import MainTitle from '../Shared/MainTitle';
import SearchForm from '../Shared/SearchForm';
import Button from '../Shared/Button';

import './index.css';
import {connect} from "react-redux";

import { searchBy } from '../../actions';
import MovieList from "../MovieList";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterByTitle: true,
            filterByGenre: false,
        }
    }

    filterByTitle = () => {
        this.setState(() => {
            return {
                filterByTitle: true,
                filterByGenre: false
            }
        });
        this.props.searchBy('title');
    }

    filterByGenre = () => {
        this.setState(() => {
            return {
                filterByTitle: false,
                filterByGenre: true
            }
        });
        this.props.searchBy('genres');
    }

    render() {
        return (
            <>
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
                <MovieList/>
            </>
        )
    }
};

const mapDispatchToProps = {
    searchBy
};

export default connect(
    null,
    mapDispatchToProps
)(Header);