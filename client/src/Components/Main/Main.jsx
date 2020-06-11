import React, { Component } from "react";
import { getCategories } from "../../services/categories";
import { Route } from "react-router-dom";
import {
  getAllPets,
  createPet,
  deletePet,
  updatePet,
} from "../../services/pets";
import Categories from "../Categories/Categories";
import CreatePet from "../CRUD/CreatePet";
import UpdatePet from "../CRUD/UpdatePet";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Pets from "../Pets/Pets";
import Pet from "../Pet/Pet";

export default class Main extends Component {
  state = {
    pets: [],
    categories: [],
    selectedCategory: "",
  };

  handleCategoryChange = (e) => {
    const { value } = e.target;
    this.setState({
      selectedCategory: value,
    });
  };

  async componentDidMount() {
    const pets = await getAllPets();
    this.setState({ pets });
    this.getAllCategories();
  }

  getAllCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  addPet = async (petData) => {
    const newPet = await createPet(petData);
    console.log(newPet);
    this.setState((prevState) => ({
      pets: [...prevState.pets, newPet],
    }));
  };

  putPet = async (id, petData) => {
    const updatedPet = await updatePet(id, petData);
    console.log(updatedPet);
    this.setState((prevState) => ({
      pets: prevState.pets.map((pet) => (pet.id === id.id ? updatedPet : pet)),
    }));
  };

  destroyPet = async (id) => {
    await deletePet(id);
    this.setState((prevState) => ({
      pets: prevState.pets.filter((pet) => pet.id !== id),
    }));
  };

  render() {
    return (
      <main>
        <Route
          exact
          path="/"
          render={(props) => (
            <SignIn
              {...props}
              handleSignInSubmit={this.props.handleSignInSubmit}
            />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <SignUp
              {...props}
              handleSignUpSubmit={this.props.handleSignUpSubmit}
            />
          )}
        />
        <Route
          path="/home"
          render={() => (
            <Categories
              categories={this.state.categories}
              pets={this.state.pets}
              handleCategoryChange={this.handleCategoryChange}
            />
          )}
        />
        <Route
          exact
          path="/home"
          render={(props) => (
            <Pets
              {...props}
              pets={this.state.pets}
              categories={this.state.categories}
              selectedCategory={this.state.selectedCategory}
            />
          )}
        />
        <Route
          exact
          path="/pets/:id"
          render={(props) => (
            <Pet
              {...props}
              currentUser={this.props.currentUser}
              destroyPet={this.destroyPet}
            />
          )}
        />
        <Route
          path="/add/pet"
          render={(props) => (
            <CreatePet
              {...props}
              addPet={this.addPet}
              categories={this.state.categories}
            />
          )}
        />
        <Route
          path="/pets/:id/edit"
          render={(props) => {
            return (
              <UpdatePet
                {...props}
                putPet={this.putPet}
                categories={this.state.categories}
              />
            );
          }}
        />
      </main>
    );
  }
}
