// Dependencies
import React, { Component } from "react";
import { hot } from "react-hot-loader";
// Styles
import "./App.css";

/**
 * The root component for the application.
 *
 * @extends Component
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default hot(module)(App);
