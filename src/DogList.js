import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    return (
      <div className="container DogList">
        <h1 className="display-1 mt-3 mb-4 text-center">Dog List</h1>
        <div className="row">
          {this.props.dogs.map((dog) => (
            <div className="box col-md-6 col-lg-4 text-center" key={dog.name}>
              <Link to={`/dogs/${dog.name}`} className="Dog">
                <img src={dog.src} alt={dog.name} className="DogList-img" />
                <h3>{dog.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
