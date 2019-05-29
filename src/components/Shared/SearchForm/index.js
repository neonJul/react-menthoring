import React from 'react';
import Button from '../Button';

import './index.css';
import { fetchMoviesAsync } from "../../../actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
const queryString = require('query-string');

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const query = queryString.stringify({ ...this.props.searchParams, ...{ search: this.state.inputValue }});
        this.props.history.push({
            pathname: '/search/',
            search: `Search%20${query}`
        });
        this.state.inputValue
        ? this.props.fetchMoviesAsync({ ...this.props.searchParams, ...{ search: this.state.inputValue }})
        : null
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                <Button name="Search"/>
            </form>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        searchParams: state.searchParams,
    }
}

const mapDispatchToProps = {
    fetchMoviesAsync
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm));