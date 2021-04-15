import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routing from './config/routing';

import './App.scss';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const documentWidth = document.documentElement.clientWidth;
    let time: any;
    window.onresize = function () {
      if (time)
        clearTimeout(time);
      time = setTimeout(function () {
        if (documentWidth !== document.documentElement.clientWidth) {
          window.location.reload();
        }
      }, 123);
    };
  }, [])
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
