import React, { Component } from "react";

////////******files*******//////////
import Navbar from "./Navbar";
import Routes from "./Routes";
import bonzo from "./images/bonzo.jpg";
import galaxy from "./images/galaxy.jpg";
import reactar from "./images/reactar.jpg";
import romeo from "./images/romeo.jpg";
import skippy from "./images/skippy.jpg";
// import "./App.css";

class App extends Component {
  static defaultProps = {
    dogDetails: [
      {
        name: "Bonzo",
        age: 5,
        src: bonzo,
        facts: [
          "Bonzo has soo much energy!",
          "People call Bonzo 'vodafone wala kutta'",
          "Bonzo is highly intelligent.",
        ],
      },
      {
        name: "Galaxy",
        age: 1,
        src: galaxy,
        facts: [
          "Galaxy is toooo friendly.",
          "Galaxy wants to cuddle with you!",
          "Galaxy has two pony tails and a puff 🤩",
        ],
      },
      {
        name: "Reactar",
        age: 4,
        src: reactar,
        facts: [
          "Reactor has got his name from a stranger",
          "Reactar loves people more than dogs",
          "Reactor get happy when anyone talks to him.",
        ],
      },
      {
        name: "Romeo",
        age: 1,
        src: romeo,
        facts: [
          "Romeo loves to eat Sponge-Rasgulla",
          "Romeo gives you hug from behind.",
          "Romeo like joy-rides in car.",
          "This Romeo don't chase 'Juliet'😌",
        ],
      },
      {
        name: "Skippy",
        age: 3,
        src: skippy,
        facts: ["Skippy is terrible guard dog. ", "Skippy loves high jumping."],
      },
    ],
  };

  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogDetails} />
        <Routes dogDetails={this.props.dogDetails} />
      </div>
    );
  }
}

export default App;
