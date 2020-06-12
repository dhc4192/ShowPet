import React from "react";
import { Link } from "react-router-dom";
import "./Pets.css";

export default function Pets(props) {
  const { pets, selectedCategory } = props;
  return (
    <div>
      {pets
        .filter((pet) => {
          if (selectedCategory.length === 0) {
            return true;
          } else {
            return pet.category_id === parseInt(selectedCategory);
          }
        })
        .map((pet) => (
          <React.Fragment key={pet.id}>
            <Link className="pets-link" to={`/pets/${pet.id}`}>
              <div className='pets-container'>
                <img className="pets-images" src={pet.image} alt={pet.breed} />
                <p className="pets-name">{pet.name}</p>
              </div>
            </Link>
          </React.Fragment>
        ))}
    </div>
  );
}
