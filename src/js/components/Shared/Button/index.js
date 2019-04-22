import React from 'react';
import cs from 'classnames';
import './index.css';

class Button extends React.Component { 
    render() {
        return (
            <button className={cs(this.props.className, "button")} onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default Button;