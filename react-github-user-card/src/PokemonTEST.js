// Test to see why App isn't working

import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

class PokemonTEST extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images")
      .then((res) => res.json())
      .then((dogs) => this.setState({ doggos: dogs.message }))
      .catch((err) => console.log("noooo"));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.doggos.map((doggo) => (
          <img src={doggo} key={doggo} />
        ))}
      </div>
    );
  }
}

export default PokemonTEST;
