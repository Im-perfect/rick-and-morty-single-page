import React, { Component } from "react";

export default class EpisodeCard extends Component {
  render() {
    const { name, air_date, episode, characters } = this.props.info;
    return (
      <div className="card card-episode">
        <h2>{name}</h2>
        <div className="card-info">
          <div className="card-info-row">
            <h4>air date</h4>
            <p>{air_date}</p>
          </div>
          <div className="card-info-row">
            <h4>episode</h4>
            <p>{episode}</p>
          </div>
          <div className="card-info-row">
            <h4>characters</h4>
            <p>{characters.length}</p>
          </div>
        </div>
      </div>
    );
  }
}
