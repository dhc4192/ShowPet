import React, { Component } from "react";
import { getOnePet } from "../../services/pets";
import { Link } from "react-router-dom";
import EditIcon from "../../Assets/Images/Edit-Icon.png";
import DeleteIcon from "../../Assets/Images/Trash-Icon.png";
import Header from "../Header/Header";
import "./Pet.css";

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

    return (
      <>
        <Header currentUser={currentUser} />
        <div className="main-pet-container">
          <img className="pet-image" src={pet.image} alt={pet.breed} />
          {currentUser && currentUser.id === pet.user_id && (
            <div className="edit-delete-container">
              <Link className="pet-edit-link" to={`/pets/${pet.id}/edit`}>
                <button className="pet-edit-button">
                  <img src={EditIcon} /> Edit
                </button>
              </Link>
              <Link className="pet-delete-link" to="/home">
                <button
                  className="pet-delete-button"
                  onClick={() => destroyPet(pet.id)}
                >
                  <img src={DeleteIcon} /> Delete
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="pet-descriptions-container">
          <p className="pet-descriptions">
            <span>Name:</span>
            <br />
            {pet.name}
          </p>
          <p className="pet-descriptions">
            <span>Breed:</span>
            <br />
            {pet.breed}
          </p>
          <p className="pet-descriptions">
            <span>Age:</span>
            <br />
            {pet.age}
          </p>
          <p className="pet-descriptions">
            <span>Description:</span>
            <br />
            {pet.description}
          </p>
        </div>
      </>
    );
  }
}
