import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLocations } from "../actions/location";
import { loadingMsg } from "../constants";
import LocationCard from "./LocationCard";
import Pagination from "./Pagination";

export class LocationList extends Component {
  state = {
    currentPage: 1
  };

  handlePrev = () => {
    const page = this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;
    this.props.getLocations(page);

    this.setState({
      currentPage: page
    });
  };

  handleNext = () => {
    const page =
      this.state.currentPage === this.props.info.pages
        ? this.props.info.pages
        : this.state.currentPage + 1;
    this.props.getLocations(page);

    this.setState({
      currentPage: page
    });
  };

  componentDidMount = () => {
    this.props.getLocations(this.state.currentPage);
  };

  render() {
    if (!this.props.locations) return loadingMsg;

    return (
      <div>
        <div className="card-container">
          {this.props.locations.map(location => (
            <div className="card-wrapper" key={location.id}>
              <Link to={`/locations/${location.id}`}>
                <LocationCard info={location} />
              </Link>
            </div>
          ))}
        </div>

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

const mapStateToProps = ({ locations, info }) => ({ locations, info });

const mapDispatchToProps = {
  getLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
