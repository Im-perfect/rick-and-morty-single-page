import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          <Link to={`/dimensions/${dimension}`} key={dimension}>
            <p>{dimension}</p>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ dimensions }) => ({ dimensions });

const mapDispatchToProps = { getDimensions };

export default connect(mapStateToProps, mapDispatchToProps)(DimensionList);
