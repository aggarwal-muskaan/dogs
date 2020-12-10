import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map((d) => (
      <li className="nav-item" key={d.name}>
        <NavLink exact to={`/dogs/${d.name}`} className="nav-link">
          {d.name}
        </NavLink>
      </li>
    ));
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/dogs">
          Dog App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dogs" exact className="nav-link ">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
