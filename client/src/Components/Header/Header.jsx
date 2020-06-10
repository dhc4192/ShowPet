import React from "react";
import { Link } from "react-router-dom";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";

export default function Header(props) {
  return (
    <div>
      <img src={ShowPetsLogo} alt="ShowPet Logo" />
      <h1>ShowPets</h1>
      {props.currentUser ? (
        <>
          Welcome, {props.currentUser.username}
          <Link to="/">
            <button onClick={props.handleSignOut}>Sign Out</button>
          </Link>
        </>
      ) : null}
    </div>
  );
}
