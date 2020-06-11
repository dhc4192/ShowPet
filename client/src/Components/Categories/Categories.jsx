import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    const { handleCategoryChange, categories } = this.props;
    return (
      <div>
        <select onChange={handleCategoryChange}>
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
