import React, { Component } from "react";

export default class LocationCard extends Component {
  render() {
    const { name, type, dimension, residents } = this.props.info;

    return (
      <div className="card card-location">
        <h2>{name}</h2>
        <div className="card-info">
          <div className="card-info-row">
            <h4>type</h4>
            <p>{type}</p>
          </div>
          <div className="card-info-row">
            <h4>dimension</h4>
            <p>{dimension === "unknown" ? <span>Unknown</span> : dimension}</p>
          </div>
          <div className="card-info-row">
            <h4>resident(s)</h4>
            <p>{residents.length}</p>
          </div>
        </div>
      </div>
    );
  }
}
