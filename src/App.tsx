import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import './App.scss';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie-details/:id" component={DetailsPage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/search-results" component={SearchResults} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
