import React, { Component } from "react";
import Header from "../Header/Header";
import './CreatePet.css'

export default class CreatePet extends Component {
  state = {
    pet: {
      name: "",
      breed: "",
      age: "",
      image: "",
      description: "",
    },
    category: 0,
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
    const { categories } = this.props;
    const { addPet, history, currentUser } = this.props;
    return (
      <>
        <Header currentUser={currentUser} />
        <p className="update-add-your-pet">Add your Pet!</p>
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
          <div>
            <select
              className="update-drop-down"
              name="category"
              onChange={(e) =>
                this.setState({
                  category: e.target.value,
                })
              }
            >
              <option className="categories-default-option">Category</option>
              {categories.map((category) => (
                <option
                  className="categories-options"
                  key={category.name}
                  value={parseInt(category.id)}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <img
            className="update-create-image"
            src={pet.image}
            alt={pet.breed}
          />
          <label htmlFor="image">
            <input
              className="update-create-input"
              id="image"
              type="text"
              name="image"
              value={pet.image}
              placeholder="Image"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="name">
            <input
              className="update-create-input"
              id="name"
              type="text"
              name="name"
              value={pet.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="breed">
            <input
              className="update-create-input"
              id="breed"
              type="text"
              name="breed"
              value={pet.breed}
              placeholder="Breed"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="age">
            <input
              className="update-create-input"
              id="age"
              type="text"
              name="age"
              value={pet.age}
              placeholder="Age"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              className="update-create-text-area"
              id="description"
              rows={8}
              name="description"
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
