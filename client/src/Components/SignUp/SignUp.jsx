import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleSignUpSubmit, history } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUpSubmit(this.state);
          history.push("/home");
          this.setState({
            username: "",
            email: "",
            password: "",
          });
        }}
      >
        <h3>Sign Up</h3>
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
        <br />
        <label htmlFor="email">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button>SIGN UP</button>
      </form>
    );
  }
}
