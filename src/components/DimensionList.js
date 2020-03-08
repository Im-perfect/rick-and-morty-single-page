import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDimensions, getDimensions } from "../actions/dimension";
import { loadingMsg } from "../constants";

export class DimensionList extends Component {
  componentDidMount = () => {
    fetchDimensions().then(res => this.props.getDimensions(res));
  };

  render() {
    if (!this.props.dimensions) return loadingMsg;

    return (
      <div>
        {this.props.dimensions.map(dimension => (
          <p>{dimension}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ dimensions }) => ({ dimensions });

const mapDispatchToProps = { getDimensions };

export default connect(mapStateToProps, mapDispatchToProps)(DimensionList);
