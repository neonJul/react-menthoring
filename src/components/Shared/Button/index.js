import React from 'react';
import cs from 'classnames';

import injectSheet from 'react-jss';

const styles = {
    myButton: {
        border: 'none',
        margin: '0 10px',
    }
}

class Button extends React.Component { 
    render() {
        let { classes } = this.props;
        return (
            <button className={cs(this.props.className, classes.myButton)} onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default injectSheet(styles)(Button);