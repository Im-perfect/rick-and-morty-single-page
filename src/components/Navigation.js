import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {
    selected: "home"
  };

  handleClick = selected => {
    this.setState({
      selected
    });
  };

  render() {
    return (
      <ul className="nav">
        <li
          className={`nav-item ${
            this.state.selected === "home" ? "is-active" : null
          }`}
          onClick={() => this.handleClick("home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav-item ${
            this.state.selected === "dimensions" ? "is-active" : null
          }`}
          onClick={() => this.handleClick("dimensions")}
        >
          <Link to="/dimensions">Dimensions</Link>
        </li>
        <li
          className={`nav-item ${
            this.state.selected === "locations" ? "is-active" : null
          }`}
          onClick={() => this.handleClick("locations")}
        >
          <Link to="/locations">Locations</Link>
        </li>
        <li
          className={`nav-item ${
            this.state.selected === "episodes" ? "is-active" : null
          }`}
          onClick={() => this.handleClick("episodes")}
        >
          <Link to="/episodes">Episodes</Link>
        </li>
        <li
          className={`nav-item ${
            this.state.selected === "characters" ? "is-active" : null
          }`}
          onClick={() => this.handleClick("characters")}
        >
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    );
  }
}
