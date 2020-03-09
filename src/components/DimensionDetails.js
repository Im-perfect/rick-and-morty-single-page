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
      <div>
        <p>
          {this.props.match.params.dimensionName} has{" "}
          <strong>{characters.length} characters</strong>
        </p>
        {characters.map(character => (
          <CharacterCard info={character} key={character.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DimensionDetails);
