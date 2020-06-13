import React, { Component } from "react";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo.png";
import DogCat from "../../Assets/Images/Dog-Cat.jpg";
import "./SignUp.css";

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
      <>
        <div className="main-sign-in-up-container">
          <div className="sign-in-up-logo-container">
            <img
              className="sign-in-up-logo"
              src={ShowPetsLogo}
              alt="Circular logo in blue with white shadow of a cat and dog facing each other."
            />
            <p className="sign-in-up-title">ShowPets</p>
          </div>
          <div className="main-sign-in-up-form-container">
            <div className="sign-in-up-form-container">
              <form
                className="sign-in-up-form"
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
                <p className="sign-in-up-text">Sign Up</p>
                <label htmlFor="username">
                  <input
                    className="sign-in-up-input"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    maxlength="15"
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  <input
                    className="sign-in-up-input"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
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
                <button className="sign-in-up-button">SIGN UP</button>
              </form>
            </div>

            <img
              className="sign-up-dog-cat-image"
              src={DogCat}
              alt="Outline of a dog and a cat."
            />
          </div>
        </div>
      </>
    );
  }
}
