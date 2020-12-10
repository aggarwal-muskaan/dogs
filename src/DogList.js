import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    return (
      <div className="container justify-content-center">
        <h1 className="display-1">Dog List</h1>
        <div className="row  ">
          {this.props.dogs.map((dog) => (
            <Link to={`/dogs/${dog.name}`} key={dog.name}>
              <div className="DogList col-md-6 col-lg-4">
                <img src={dog.src} alt={dog.name} className="DogList-img" />
                <h3>{dog.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
