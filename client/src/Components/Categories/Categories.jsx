import React, { Component } from "react";

export default class Categories extends Component {
  state = {
    categoryId: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      categoryId: value,
    });
  };

  render() {
    const { categories } = this.props;
    console.log(this.state.option)
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
