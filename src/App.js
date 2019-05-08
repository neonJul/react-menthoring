import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './index.css';
import SelectedMovie from './components/SelectedMovie';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    true
                    ? <Header/>
                    : <SelectedMovie/>
                }
                {
                    false
                    ? <div className="empty-page">No films found</div>
                    : <MovieList/>
                }
            </React.Fragment>
        )
    }
};

export default App;