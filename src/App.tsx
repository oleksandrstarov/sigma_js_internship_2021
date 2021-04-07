import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';

import './App.scss';

function App() {
  return (
    <>
      <Layout>
        <Router>
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
        </Router>
      </Layout>
    </>
  );
}

export default App;
