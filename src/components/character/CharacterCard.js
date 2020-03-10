import React, { Component } from "react";

export default class CharacterCard extends Component {
  render() {
    const {
      name,
      image,
      status,
      species,
      type,
      gender,
      origin,
      location
    } = this.props.info;

    return (
      <div className="card card-character">
        <div className="card-image">
          <img src={image} alt="profile" />
        </div>
        <h2>{name}</h2>
        <div className="card-info">
          <div className="card-info-row">
            <h4>status</h4>
            <p>{status === "unknown" ? <span>Unknown</span> : status}</p>
          </div>
          <div className="card-info-row">
            <h4>species</h4>
            <p>{species === "unknown" ? <span>Unknown</span> : species}</p>
          </div>
          <div className="card-info-row">
            <h4>type</h4>
            <p>{type === "" || "unknown" ? <span>Unknown</span> : type}</p>
          </div>
          <div className="card-info-row">
            <h4>gender</h4>
            <p>{gender === "unknown" ? <span>Unknown</span> : gender}</p>
          </div>
          <div className="card-info-row">
            <h4>Origin</h4>
            <p>{origin.name === "unknown" ? <span>Unknown</span> : origin.name}</p>
          </div>
          <div className="card-info-row">
            <h4>last location</h4>
            <p>{location.name === "unknown" ? <span>Unknown</span> : location.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
