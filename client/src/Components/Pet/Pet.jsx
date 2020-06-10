import React, { Component } from "react";
import Header from "../Header/Header";
import { getOnePet } from "../../services/pets";

export default class Pet extends Component {
  state = {
    pet: {
      name: "",
      image: "",
      breed: "",
      age: "",
      description: "",
    },
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    const pet = await getOnePet(id);
    this.setState({ pet });
  }

  render() {
    const { pet } = this.state;
    const { currentUser } = this.props;
    console.log("Here", pet);

    return (
      <>
        <Header currentUser={currentUser} />
        <div>{pet && <p>{pet.name}</p>}</div>
      </>
    );
  }
}
