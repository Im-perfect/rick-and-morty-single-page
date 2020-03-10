import React, { Component } from "react";
import { connect } from "react-redux";
import { getDimensionCharacters } from "../actions/dimension";
import { loadingMsg } from "../constants";
import CharacterCard from "./CharacterCard";

export class DimensionDetails extends Component {
  state = {
    characters: null
  };

  componentDidMount = () => {
    getDimensionCharacters(this.props.match.params.dimensionName).then(res =>
      this.setState({ characters: res })
    );
  };

  render() {
    const { characters } = this.state;

    if (!characters) return loadingMsg;

    return (
      <div className="details-container">
        <div className="card card-dimension">
          <h2>{this.props.match.params.dimensionName}</h2>
          <p className="card-text">{characters.length} characters</p>
        </div>
        <div className="card-container">
          {characters.map(character => (
            <div className="card-wrapper" key={character.id}>
              <CharacterCard info={character} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DimensionDetails);
