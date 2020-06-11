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
