import React from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/pets/${pet.id}`}>
              <img src={pet.image} alt={pet.breed} />
              <p>{pet.name}</p>
            </Link>
          </React.Fragment>
        ))}
    </div>
  );
}
