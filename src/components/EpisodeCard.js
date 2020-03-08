import React, { Component } from "react";

export default class EpisodeCard extends Component {
  render() {
    const { name, air_date } = this.props.info;
    return (
      <div>
        {name}, {air_date}
      </div>
    );
  }
}
