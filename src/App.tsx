import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import MoviesList from "./pages/MoviesList";


function App() {

    return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details-page">Details Page</Link>
        </li>
        <li>
          <Link to="/search-results?title=?isFavorite=?minYear=?maxYear=?genre=">Search Results</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details-page" component={DetailsPage} />
        <Route path="/search-results" component={MoviesList} />
        <Route path="/favorites" component={MoviesList} />
      </Switch>
    </Router>
  );
}

export default App;
