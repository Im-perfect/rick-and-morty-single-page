import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { currentPage, totalPage, handlePrev, handleNext } = this.props;
    return (
      <div>
        Page {`${currentPage}/${totalPage}`}
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }
}
