import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  signInUser,
  signUpUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.css";
import Footer from "./Components/Footer/Footer";

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
        <Route path="/home">
          <Header
            currentUser={this.state.currentUser}
            handleSignOut={this.handleSignOut}
          />
        </Route>
        <Main
          handleSignInSubmit={this.handleSignInSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          currentUser={this.state.currentUser}
        />
        <Route path="/home">
          <Footer />
        </Route>
      </div>
    );
  }
}
