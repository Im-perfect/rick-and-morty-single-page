import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/dimensions">Dimension</Link>
        <Link to="/locations">Location</Link>
        <Link to="/episodes">Episodes</Link>
        <Link to="/characters">Characters</Link>
      </div>
    );
  }
}
