import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route
          exact path="/"
          render={(props) => (
            <SignIn
              {...props}
              handleSignInSubmit={this.props.handleSignInSubmit}
            />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <SignUp
              {...props}
              handleSignUpSubmit={this.props.handleSignUpSubmit}
            />
          )}
        />
      </main>
    );
  }
}
