import React, { Component } from "react";

export default class LocationCard extends Component {
  render() {
    const { id, name, residents } = this.props.info;

    return (
      <p key={id}>
        {name}
        <strong>{residents.length} residents</strong>
      </p>
    );
  }
}
