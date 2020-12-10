import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DogsInfo from "./DogsInfo";
import DogList from "./DogList";

class Routes extends Component {
  render() {
    const getDog = (prop) => {
      let found = false;
      let name = prop.match.params.dogName;
      var foundDog = this.props.dogDetails.find((dog) => {
        if (dog.name.toLowerCase() === name.toLowerCase()) {
          found = true;
          return dog;
        }
      });
      if (found === true) return <DogsInfo dog={foundDog} {...prop} />;
      else return <Redirect to="/dogs" />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={(prop) => (
            <DogList
              dogs={this.props.dogDetails}
              // myprop={prop}
            />
          )}
          // component={DogList}
        />
        <Route exact path="/dogs/:dogName" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
