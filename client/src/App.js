import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Search from "./pages/Search";
import Saved from "./pages/Saved";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
