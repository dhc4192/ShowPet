import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddIcon from "../../Assets/Images/Add-Icon.png";

import "./Categories.css";

export default class Categories extends Component {
  render() {
    const { handleCategoryChange, categories } = this.props;
    return (
      <div className="categories-container">
        <Link className="categories-add-link" to="/add/pet">
          <button className="categories-add-button">
            <img
              className="categories-add-icon"
              src={AddIcon}
              alt="plus sign"
            />
            <span className="categories-add-text">Add Pet</span>
          </button>
        </Link>
        
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
