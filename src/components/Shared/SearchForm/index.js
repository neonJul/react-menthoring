import React from 'react';
import Button from '../Button';

import './index.css';

class Header extends React.Component {
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

export default Header;