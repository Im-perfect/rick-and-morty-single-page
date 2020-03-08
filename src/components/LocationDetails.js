import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocationDetails } from "../actions/location";
import { getLocationCharacters } from "../actions/character";
import { loadingMsg } from "../constants";
import LocationCard from "./LocationCard";
import CharacterCard from "./CharacterCard";

export class LocationDetails extends Component {
  state = {
    residents: null
  };

  componentDidMount = () => {
    this.props
      .getLocationDetails(parseInt(this.props.match.params.locationId))
      .then(() =>
        getLocationCharacters(
          this.props.location.residents.map(url => url.slice(42)).join(",")
        ).then(res =>
          this.setState({
            residents: res
          })
        )
      );
  };

  render() {
    const location = this.props.location;
    const residents = this.state.residents;

    if (!location || !residents) return loadingMsg;

    return (
      <div>
        <LocationCard info={location} />
        {!residents.length
          ? "No residents"
          : residents.map(resident => (
              <CharacterCard key={resident.id} info={resident} />
            ))}
      </div>
    );
  }
}

const mapStateToProps = ({ location, locations }) => ({ location, locations });

const mapDispatchToProps = { getLocationDetails };

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
