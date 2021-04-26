import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';
import { MovieRatingProvider } from './components/MovieRatingContext';
import { ThemeContextProvider } from './components/ThemeContext';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <ThemeContextProvider>
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
        </ThemeContextProvider>
      </Router>
    </>
  );
}

export default App;
