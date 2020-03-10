import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDimensions, dispatchDimensions } from "../actions/dimension";
import { loadingMsg } from "../constants";

export class DimensionList extends Component {
  componentDidMount = () => {
    fetchDimensions().then(res => this.props.dispatchDimensions(res));
  };

  render() {
    if (!this.props.dimensions) return loadingMsg;

    return (
      <div className="card-container">
        {this.props.dimensions.map(dimension => (
          <div className="card-wrapper" key={dimension}>
            <Link to={`/dimensions/${dimension}`}>
              <div className="card card-dimension">
                <h2>{dimension}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ dimensions }) => ({ dimensions });

const mapDispatchToProps = { dispatchDimensions };

export default connect(mapStateToProps, mapDispatchToProps)(DimensionList);
