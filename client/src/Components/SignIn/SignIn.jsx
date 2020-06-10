import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";

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
      <>
        <img src={ShowPetsLogo} alt="ShowPet Logo" />
        <h1>ShowPets</h1>
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
          <h3>Sign In</h3>
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
      </>
    );
  }
}
