import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {
  signInUser,
  signUpUser,
  removeToken,
  verifyUser,
} from "./services/auth";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.handleVerify();
  }

  handleSignInSubmit = async (signInData) => {
    const currentUser = await signInUser(signInData);
    this.setState({ currentUser });
  };

  handleSignUpSubmit = async (signUpData) => {
    const currentUser = await signUpUser(signUpData);
    this.setState({ currentUser });
  };

  handleSignOut = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.clear();
    removeToken();
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleSignOut={this.handleSignOut}
        />
        <Main
          currentUser={this.state.currentUser}
          handleSignInSubmit={this.handleSignInSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
        />
      </div>
    );
  }
}
