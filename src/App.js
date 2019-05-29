import React from 'react';
import Header from './components/Header';
import './index.css';
import SelectedMovie from './components/SelectedMovie';
import NoMatch from './components/Shared/NoMatch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
    render() {        
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ Header } />
                    <Route path="/search" exact component={ Header } />
                    <Route path="/film/:id" exact component={ SelectedMovie } />
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        )
    }
};

export default App;