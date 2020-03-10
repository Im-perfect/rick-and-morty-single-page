import React, { Component } from "react";
import { connect } from "react-redux";
import EpisodeCard from "./EpisodeCard";
import CharacterCard from "./CharacterCard";
import { getEpisodeDetails } from "../actions/episode";
import { getEpisodeCharacters } from "../actions/character";
import { loadingMsg } from "../constants";

export class EpisodeDetails extends Component {
  state = {
    characters: null
  };

  componentDidMount = () => {
    this.props
      .getEpisodeDetails(Number(this.props.match.params.episodeId))
      .then(() =>
        getEpisodeCharacters(
          this.props.currentEpisode.characters
            .map(url => url.slice(42))
            .join(",")
        ).then(res =>
          this.setState({
            characters: res
          })
        )
      );
  };

  render() {
    const episode = this.props.currentEpisode;
    const characters = this.state.characters;

    if (!episode || !characters) return loadingMsg;

    return (
      <div className="details-container">
        <EpisodeCard info={episode} />
        <div className="card-container">
          {characters.length &&
            characters.map(character => (
              <div className="card-wrapper" key={character.id}>
                <CharacterCard info={character} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentEpisode }) => ({
  currentEpisode
});

const mapDispatchToProps = { getEpisodeDetails };

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetails);
