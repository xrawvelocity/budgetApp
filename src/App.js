import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />

          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
