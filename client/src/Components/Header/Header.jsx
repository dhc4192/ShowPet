import React from "react";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <img src={ShowPetsLogo} alt="ShowPet Logo" />
      <h1>ShowPets</h1>
      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <Link to="/">
            <button onClick={props.handleSignOut}>Sign Out</button>
          </Link>
        </>
      ) : null}
      <h1>hi</h1>
    </div>
  );
}
