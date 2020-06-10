import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getAllPets } from "../../services/pets";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Pets from "../Pets/Pets";
import Pet from "../Pet/Pet";

export default class Main extends Component {
  state = {
    pets: [],
  };

  async componentDidMount() {
    const pets = await getAllPets();
    this.setState({ pets });
  }

  render() {
    return (
      <main>
        <Route
          exact
          path="/"
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
        <Route
          exact
          path="/home"
          render={(props) => <Pets {...props} pets={this.state.pets} />}
        />
        <Route
          path="/pets/:id"
          render={(props) => (
            <Pet {...props} currentUser={this.props.currentUser} />
          )}
        />
      </main>
    );
  }
}
