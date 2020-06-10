import React from "react";
import { Link } from "react-router-dom";

export default function Pets(props) {
  const { pets } = props;
  return (
    <div>
      {pets.map((pet) => (
        <React.Fragment key={pet.id}>
          <Link to={`/pets/${pet.id}`}>
            <img src={pet.image} alt={pet.breed}/>
            <p>{pet.name}</p>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
