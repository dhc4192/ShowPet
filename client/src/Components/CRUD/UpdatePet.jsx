import React, { Component } from "react";
import { getOnePet } from "../../services/pets";
import Header from "../Header/Header";
import "./UpdatePet.css";

export default class CreatePet extends Component {
  state = {
    pet: {
      name: "",
      breed: "",
      age: "",
      image: "",
      description: "",
    },
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    const pet = await getOnePet(id);
    this.setState({ pet });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pet !== this.props.pet) {
      this.setPetForm();
    }
  }

  setPetForm = () => {
    const { name } = this.props.pet;
    this.setState({ name });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      pet: {
        ...this.state.pet,
        [name]: value,
      },
    });
  };

  render() {
    const { pet } = this.state;
    const { putPet, history, currentUser } = this.props;
    return (
      <>
        <Header currentUser={currentUser} />
        <p className="update-add-your-pet">Update your Pet!</p>
        <form
          className="update-create-form"
          onSubmit={(e) => {
            e.preventDefault();
            putPet(this.state.pet);
            history.push("/home");
          }}
        >
          <img
            className="update-create-image"
            src={pet.image}
            alt={pet.breed}
          />
          <label className="update-label" htmlFor="image">
            Image:
            <input
              className="update-create-input"
              id="image"
              type="text"
              name="image"
              value={pet.image}
              onChange={this.handleChange}
            />
          </label>
          <label className="update-label" htmlFor="name">
            Name:
            <input
              className="update-create-input"
              id="name"
              type="text"
              name="name"
              value={pet.name}
              onChange={this.handleChange}
            />
          </label>
          <label className="update-label" htmlFor="breed">
            Breed:
            <input
              className="update-create-input"
              id="breed"
              type="text"
              name="breed"
              value={pet.breed}
              onChange={this.handleChange}
            />
          </label>
          <label className="update-label" htmlFor="age">
            Age:
            <input
              className="update-create-input"
              id="age"
              type="text"
              name="age"
              value={pet.age}
              onChange={this.handleChange}
            />
          </label>
          <label className="update-label" htmlFor="description">
            About:
            <textarea
              className="update-create-text-area"
              id="description"
              rows={8}
              value={pet.description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          </label>
          <button className="update-create-button">Submit</button>
        </form>
      </>
    );
  }
}
