import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';
import Layout from './components/Layout';
import MovieDetails from './components/MovieDetails';
import routing from './config/routing';

import './App.scss';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie-details/:id" component={MovieDetails} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/search-results" component={SearchResults} />
            {routing.map(item => {
              return (
                <Route
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                />
              );
            })}
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
