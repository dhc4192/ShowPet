import React, { Component } from "react";
import Header from "../Header/Header";
import { getOnePet } from "../../services/pets";

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
    const { currentUser } = this.props;
    console.log(pet);

    return (
      <>
        <Header currentUser={currentUser} />
        <img src={pet.image} alt={pet.breed} />
        <button>Edit</button>
        <button>Delete</button>
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
