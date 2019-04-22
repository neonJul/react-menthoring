import React from 'react';
import Header from './js/components/Header';
import MovieList from './js/components/MovieList';
import './index.css';
import SelectedMovie from './js/components/SelectedMovie';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    false
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