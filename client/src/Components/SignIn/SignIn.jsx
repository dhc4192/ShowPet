import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { handleSignInSubmit, history } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignInSubmit(this.state);
          history.push("/home");
          this.setState({
            username: "",
            password: "",
          });
        }}
      >
        <h3>Sing In</h3>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button>SIGN IN</button>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up!</Link>
      </form>
    );
  }
}
