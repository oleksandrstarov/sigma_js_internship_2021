import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie-details/:id" component={MovieDetails} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/search-results" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
