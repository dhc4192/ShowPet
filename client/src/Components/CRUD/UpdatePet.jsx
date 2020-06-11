import React, { Component } from "react";
import { getOnePet } from "../../services/pets";

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
    const { putPet, history } = this.props;
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            putPet(this.state.pet);
            history.push("/home");
          }}
        >
          <label htmlFor="name">
            <input
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
              id="age"
              type="text"
              name="age"
              value={pet.age}
              placeholder="Age"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="image">
            <input
              id="image"
              type="text"
              name="image"
              value={pet.image}
              placeholder="Image"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              id="description"
              rows={8}
              name="description"
              value={pet.description}
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
