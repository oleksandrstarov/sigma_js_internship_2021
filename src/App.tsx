import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';
import { MovieRatingProvider } from './components/MovieRatingContext';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <MovieRatingProvider>
          <Layout>
            <Switch>
              {routing.map((item, i) => {
                return (
                  <Route
                    key={i}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  />
                );
              })}
            </Switch>
          </Layout>
        </MovieRatingProvider>
      </Router>
    </>
  );
}

export default App;
