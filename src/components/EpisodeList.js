import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
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
          <Link to={`/episodes/${episode.id}`}>
            <EpisodeCard info={episode} />
          </Link>
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
