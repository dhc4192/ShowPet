import React from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";
import AddIcon from "../../Assets/Images/Add-Icon.png";
import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="header-one">
        <img className="header-logo" src={ShowPetsLogo} alt="ShowPet Logo" />
        <p className="header-title">ShowPets</p>
      </div>
      <div className="header-two">
        {props.currentUser ? (
          <div>
            <p className="header-welcome-user">
              Welcome, {props.currentUser.username}
            </p>
            <Link to="/">
              <button
                className="header-sign-out-button"
                onClick={props.handleSignOut}
              >
                Sign Out
              </button>
            </Link>
          </div>
        ) : null}

        <Link className='header-add-link' to="/add/pet">
          <button className="header-add-button">
            <img className="header-add-icon" src={AddIcon} />
            <span className='header-add-text'>Add Pet</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
