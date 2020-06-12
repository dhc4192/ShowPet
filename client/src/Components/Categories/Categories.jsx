import React, { Component } from "react";
import "./Categories.css";

export default class Categories extends Component {
  render() {
    const { handleCategoryChange, categories } = this.props;
    return (
      <div>
        <select
          className="categories-drop-down"
          onChange={handleCategoryChange}
        >
          <option className="categories-default-option" value="">
            Category
          </option>
          {categories.map((category) => (
            <option
              className="categories-options"
              key={category.name}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
