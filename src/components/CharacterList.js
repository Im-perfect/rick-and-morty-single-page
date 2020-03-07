import React, { Component } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions/character";
import { loadingMsg } from "../constants";

export class CharacterList extends Component {
  componentDidMount = () => {
    this.props.getCharacters();
  };

  render() {
    if (!this.props.characters) return loadingMsg;
    return (
      <div>
        {this.props.characters.map(character => (
          <p>{character.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ characters }) => ({ characters });

const mapDispatchToProps = { getCharacters };

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
