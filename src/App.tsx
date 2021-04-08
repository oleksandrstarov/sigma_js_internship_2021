import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Home from './components/Home';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';
import Layout from './components/Layout';
import MovieDetails from './components/MovieDetails';
=======
import Layout from './components/Layout';
import routing from './config/routing';

>>>>>>> 45afd35d4fe293f8ecd0bee8a96e8e271fc734c9
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
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
        </Layout>
      </Router>
    </>
  );
}

export default App;
