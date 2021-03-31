import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import MoviesList from './pages/MoviesList';


function App() {

    return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/movie-details'>Details Page</Link>
        </li>
        <li>
          <Link to='/search-results/:title?:id?'>Search Results</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie-details' component={DetailsPage} />
        <Route path='/favorites'>
          <MoviesList title="Favorites"/>
        </Route>
        <Route path='/search-results/:title?:id?'>
          <MoviesList title="Search Results"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
