import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";
import DogCat from "../../Assets/Images/Dog-Cat.jpg";
import './SignIn.css'

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
        <img
          className="sign-in-up-logo"
          src={ShowPetsLogo}
          alt="Circular logo in blue with white shadow of a cat and dog facing each other."
        />
        <p className="sign-in-up-title">ShowPets</p>
        <form
          className="sign-in-up-form"
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
          <p className="sign-in-up-text">Sign In</p>
          <label htmlFor="username">
            <input
              className="sign-in-up-input"
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
              className="sign-in-up-input"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className="sign-in-up-button">SIGN IN</button>
          <p className="account-question-text">Don't have an account?</p>
          <Link className="sign-up-link" to="/signup">
            <button className="sign-up-link-button">Sign Up!</button>
          </Link>
        </form>
        <img
          className="sign-in-dog-cat-image"
          src={DogCat}
          alt="Outline of a dog and a cat."
        />
      </>
    );
  }
}
