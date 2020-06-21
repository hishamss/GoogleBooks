import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbo />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={Search} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
