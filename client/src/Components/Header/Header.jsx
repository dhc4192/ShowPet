import React from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";
import AddIcon from "../../Assets/Images/Add-Icon.png";

export default function Header(props) {
  return (
    <div>
      <div className="header-one">
        <img className="header-logo" src={ShowPetsLogo} alt="ShowPet Logo" />
        <p className="header-title">ShowPets</p>
      </div>

      {props.currentUser ? (
        <div className="header-two">
          Welcome, {props.currentUser.username}
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

      <Link to="/add/pet">
        <button className="header-add-button">
          <img className="header-add-icon" src={AddIcon} />
          Add Pet
        </button>
      </Link>
    </div>
  );
}
