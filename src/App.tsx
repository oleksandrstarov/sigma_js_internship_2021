import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';

import './App.scss';
import useReloadOnResize from './hooks/useReloadOnResize';

function App() {
  useReloadOnResize()
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
