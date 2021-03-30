import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import SearchResults from "./pages/SearchResults";


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
          <Link to="/searh-results">Search Results</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details-page" component={DetailsPage} />
        <Route path="/searh-results" component={SearchResults} />
        <Route path="/favorites" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
