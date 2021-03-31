import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import DetailsPage from './components/MovieDetails';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';

import './App.css';


function App() {
    return (
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movie-details'>Movie details</Link>
          </li>
          <li>
            <Link to='/search-results/:title'>Search Results</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie-details/:id' component={DetailsPage} />
          <Route path='/favorites' component={Favorites}/>
          <Route path='/search-results/:title?&:genre?&:minYear?&:maxYear?' component={SearchResults}/>
        </Switch>
      </Router>
    )
}


export default App;
