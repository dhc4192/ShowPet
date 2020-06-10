import React from "react";
import ShowPetsLogo from "../../Assets/Images/ShowPets-Logo-small.png";

export default function Header(props) {
  return (
    <div>
      <img src={ShowPetsLogo} alt="ShowPet Logo" />
      <h1>ShowPets</h1>
      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button onClick={props.handleSignOut}>Sign Out</button>
        </>
      ) : null}
    </div>
  );
}
