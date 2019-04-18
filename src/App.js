import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

/**
 * @component  @Link - loads or redircts to a particular address
 * which is mentioned @attribute  @to
 * it only redirects if the link has been clicked
 *
 */

const User = function() {
  return (
    <div>
      <Link to="/user">user</Link>
    </div>
  );
};

const User2 = function() {
  return (
    <div>
      <Link to="/user">user</Link>
    </div>
  );
};

const Home = function() {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

/**
 * @component  @Route
 * @attribute  @path implies the current address
 * @attribute  @exact implies a strict match, not a pattern match
 * @attribute  @component implies which components to render
 * when address mentioned in the path is active
 * @attribute  @render is same as attribute component
 *
 * so here, at the startup our path is "/" so it loads the User component
 * when clicking the User component it loads or "/user" address
 * so where ever in <Route> path is "/user" it renders the mentioned component
 * if a path is not mentioned the its common for all addresses
 */

/**
 * @TIPS
 * @component @Route and @Link cannnot stay outside @Router
 * the parent componet  of @Link should be inside @Router if it is in use.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={User} />
          <Route path="/user" exact component={Home} />
          <Route path="/user" exact render={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
