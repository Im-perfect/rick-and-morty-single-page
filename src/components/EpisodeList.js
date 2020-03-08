import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import Pagination from "./Pagination";
import { getEpisodes } from "../actions/episode";
import { loadingMsg } from "../constants";

export class EpisodeList extends Component {
  state = {
    currentPage: 1
  };

  handlePrev = () => {
    const page = this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;
    this.props.getEpisodes(page);

    this.setState({
      currentPage: page
    });
  };

  handleNext = () => {
    const page =
      this.state.currentPage === this.props.info.pages
        ? this.props.info.pages
        : this.state.currentPage + 1;
    this.props.getEpisodes(page);

    this.setState({
      currentPage: page
    });
  };
  componentDidMount = () => {
    this.props.getEpisodes(this.state.currentPage);
  };
  render() {
    if (!this.props.episodes) return loadingMsg;
    return (
      <div>
        {this.props.episodes.map(episode => (
          <Link to={`/episodes/${episode.id}`} key={episode.id}>
            <EpisodeCard info={episode} />
          </Link>
        ))}
        <Pagination
          totalPage={this.props.info.pages}
          currentPage={this.state.currentPage}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ episodes, info }) => ({
  episodes,
  info
});

const mapDispatchToProps = {
  getEpisodes
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);
