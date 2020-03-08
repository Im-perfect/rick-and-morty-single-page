import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisodes } from "../actions/episode";
import { loadingMsg } from "../constants";

export class EpisodeList extends Component {
  componentDidMount = () => {
    this.props.getEpisodes();
  };
  render() {
    if (!this.props.episodes) return loadingMsg;
    return (
      <div>
        {this.props.episodes.map(episode => (
          <p key={episode.id}>
            {episode.name},{episode.air_date}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ episodes }) => ({
  episodes
});

const mapDispatchToProps = {
  getEpisodes
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);
