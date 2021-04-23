import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';
import { ThemeContextProvider } from './components/ThemeContext';
import { FavoriteContextProvider } from './components/FavoritesContext';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <ThemeContextProvider>
          <FavoriteContextProvider>
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
          </FavoriteContextProvider>
        </ThemeContextProvider>
      </Router>
    </>
  );
}

export default App;
