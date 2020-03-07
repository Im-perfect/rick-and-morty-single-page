import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations } from "../actions/location";
import { loadingMsg } from "../constants";

export class LocationList extends Component {
  componentDidMount = () => {
    this.props.getLocations();
  };

  render() {
    if (!this.props.locations) return loadingMsg;

    return (
      <div>
        {this.props.locations.map(location => (
          <p key={location.id}>{location.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ locations }) => ({ locations });

const mapDispatchToProps = {
  getLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
