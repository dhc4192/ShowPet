import React, { Component } from "react";
import Header from "../Header/Header";
import { getOnePet } from "../../services/pets";
import { Link } from "react-router-dom";

export default class Pet extends Component {
  state = {
    pet: {
      name: "",
      image: "",
      breed: "",
      age: "",
      description: "",
    },
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    const pet = await getOnePet(id);
    this.setState({ pet });
  }

  render() {
    const { pet } = this.state;
    const { currentUser, destroyPet } = this.props;
    console.log(pet);

    return (
      <>
        <Header currentUser={currentUser} />
        <img src={pet.image} alt={pet.breed} />
        {currentUser && currentUser.id === pet.user_id && (
          <>
            <Link to={`/pets/${pet.id}/edit`}>
              <button>Edit</button>
            </Link>
            <Link to="/home">
              <button onClick={() => destroyPet(pet.id)}>Delete</button>
            </Link>
          </>
        )}

        <div>
          <p>{pet.name}</p>
          <p>{pet.breed}</p>
          <p>{pet.age}</p>
          <p>{pet.description}</p>
        </div>
      </>
    );
  }
}
