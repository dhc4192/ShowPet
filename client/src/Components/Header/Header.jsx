import React from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";
import AddIcon from "../../Assets/Images/Add-Icon.png";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header-one">
        <Link className="header-logo-link" to="/home">
          <img
            className="header-logo"
            src={ShowPetsLogo}
            alt="Circular logo in blue with white shadow of a cat and dog facing each other."
          />
        </Link>
        <p className="header-title">ShowPets</p>
      </div>
      <div className="header-two">
        {props.currentUser ? (
          <div className="main-header-welcome-container">
            <div className="header-welcome-container">
              <p className="header-welcome-user">
                <p className="header-welcome-text">
                  Welcome, {props.currentUser.username}
                </p>
              </p>
              <Link className="header-sign-out-link" to="/">
                <button
                  className="header-sign-out-button"
                  onClick={props.handleSignOut}
                >
                  <p className='header-sign-out-text'>Sign Out</p>
                </button>
              </Link>
            </div>
          </div>
        ) : null}

        <Link className="header-add-link" to="/add/pet">
          <button className="header-add-button">
            <img className="header-add-icon" src={AddIcon} alt="plus sign" />
            <span className="header-add-text">Add Pet</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
