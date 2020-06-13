import React from "react";
import { Link } from "react-router-dom";
import "./Pets.css";

export default function Pets(props) {
  const { pets, selectedCategory } = props;
  return (
    <div className="container-for-tablet-desktop">
      {pets
        .filter((pet) => {
          if (selectedCategory.length === 0) {
            return true;
          } else {
            return pet.category_id === parseInt(selectedCategory);
          }
        })
        .reverse()
        .map((pet) => (
          <div className="main-pets-container" key={pet.id}>
            <Link className="pets-link" to={`/pets/${pet.id}`}>
              <div className="pets-container">
                <img className="pets-images" src={pet.image} alt={pet.breed} />
                <p className="pets-name">{pet.name}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
