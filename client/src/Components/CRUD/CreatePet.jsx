import React, { Component } from "react";
import { createPet } from "../../services/pets";

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
    const { name, breed, age, image, description } = this.state;
    const { addPet, history } = this.props;
    return (
      <>
        <h3>Add your pet!</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPet(this.state);
            history.push("/home");
            this.setState({
              pet: {
                ...this.state.pet,
              },
            });
          }}
        >
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="breed">
            <input
              id="breed"
              type="text"
              name="breed"
              value={breed}
              placeholder="Breed"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="age">
            <input
              id="age"
              type="text"
              value={age}
              placeholder="Age"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="image">
            <input
              id="image"
              type="text"
              value={image}
              placeholder="Image"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              id="description"
              rows={8}
              value={description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
