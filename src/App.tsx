import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routing from './config/routing';
import './App.css';

function App() {
    return (
      <Router>
        <Switch>
            {routing.map(({ path, component, exact }, index) => (
                <Route path={path} exact={exact} key={index} render={component} />
            ))}
        </Switch>
      </Router>
    )
}

export default App;