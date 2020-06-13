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
        <div className="top-pet-container">
          <div className="main-pet-container">
            <div className="pet-container">
              <img className="pet-image" src={pet.image} alt={pet.breed} />
              {currentUser && currentUser.id === pet.user_id && (
                <div className="edit-delete-container">
                  <Link className="pet-edit-link" to={`/pets/${pet.id}/edit`}>
                    <button className="pet-edit-button">
                      <img className="pet-edit-icon" src={EditIcon} />{" "}
                      <span className="pet-edit-text">Edit</span>
                    </button>
                  </Link>
                  <Link className="pet-delete-link" to="/home">
                    <button
                      className="pet-delete-button"
                      onClick={() => destroyPet(pet.id)}
                    >
                      <img className="pet-delete-icon" src={DeleteIcon} />{" "}
                      <span className="pet-delete-text">Delete</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="pet-descriptions-container">
            <p className="pet-descriptions">
              <span className="pet-descriptions-title">Name:</span>
              <br />
              {pet.name} <hr />
            </p>
            <p className="pet-descriptions">
              <span className="pet-descriptions-title">Breed:</span>
              <br />
              {pet.breed} <hr />
            </p>
            <p className="pet-descriptions">
              <span className="pet-descriptions-title">Age:</span>
              <br />
              {pet.age} <hr />
            </p>
            <p className="pet-descriptions">
              <span className="pet-descriptions-title">Description:</span>
              <br />
              {pet.description}
            </p>
          </div>
        </div>
      </>
    );
  }
}
