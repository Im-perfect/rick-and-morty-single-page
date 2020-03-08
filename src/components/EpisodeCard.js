import React, { Component } from "react";

export default class EpisodeCard extends Component {
  render() {
    const { name, air_date, characters } = this.props.info;
    return (
      <div>
        <p>{name}, {air_date} <strong>{characters.length} characters</strong></p>    
      </div>
    );
  }
}
