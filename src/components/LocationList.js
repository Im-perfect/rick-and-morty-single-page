import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLocations } from "../actions/location";
import { loadingMsg } from "../constants";
import LocationCard from "./LocationCard";

export class LocationList extends Component {
  componentDidMount = () => {
    this.props.getLocations();
  };

  render() {
    if (!this.props.locations) return loadingMsg;

    return (
      <div>
        {this.props.locations.map(location => (
          <Link to={`/locations/${location.id}`}>
            <LocationCard info={location} />
          </Link>
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
