import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/movie-details/:id' component={ MovieDetails } />
                <Route path='/favorites' component={ Favorites }/>
                <Route path='/search-results' component={ SearchResults }/>
            </Switch>
        </Router>
    )
}

export default App;