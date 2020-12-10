// import logo from './logo.svg';
import React, { Component } from "react";
import DogList from "./DogList";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Bonzo",
        age: 2,
        src: "bonzo",
        facts: [
          "Bonzo has soo much energy!",
          "People call Bonzo 'vodafone wala kutta'",
          "Bonzo is highly intelligent.",
        ],
      },
      {
        name: "Galaxy",
        age: 1,
        src: "galaxy",
        facts: [
          "Galaxy is toooo friendly",
          "Galaxy wants to cuddle with you!",
          "Galaxy has two pony tails and a puff",
        ],
      },
      {
        name: "Reactar",
        age: 4,
        src: "reactar",
        facts: [
          "Reactor has got his name from a stranger",
          "Reactar loves people more than dogs",
          "Reactor get happy when anyone talks to him.",
        ],
      },
      {
        name: "Romeo",
        age: 6,
        src: "romeo",
        facts: [
          "Romeo loves to eat Sponge-Rasgulla",
          "Romeo gives you hug from behind.",
          "This Romeo don't chase 'Juliet'",
        ],
      },
      // {
      //   name: "Skippy",
      //   age: 3,
      //   src: "skippy",
      //   facts: ["Skippy has ", "Skippy loves high jumping.", ""],
      // },
    ],
  };
  render() {
    return (
      <Route path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
    );
  }
}

export default App;
