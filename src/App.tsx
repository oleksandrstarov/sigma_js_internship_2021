import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie-details">Movie details</Link>
        </li>
        <li>
          <Link to="/search-results/:title">Search Results</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie-details" component={DetailsPage} />
        <Route path="/favorites">
          <Favorites>
            <MoviesList title="Favorites" />
          </Favorites>
        </Route>
        <Route path="/search-results/:title">
          <SearchResults>
            <MoviesList title="Search Results" />
          </SearchResults>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
