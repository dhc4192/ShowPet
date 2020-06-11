import React, { Component } from "react";

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
    const { addPet, history } = this.props;
    return (
      <>
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
              name="category"
              onChange={(e) =>
                this.setState({
                  category: e.target.value,
                })
              }
            >
              <option>Category</option>
              {categories.map((category) => (
                <option key={category.name} value={parseInt(category.id)}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
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
