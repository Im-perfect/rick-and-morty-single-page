import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { currentPage, totalPage, handlePrev, handleNext } = this.props;
    return (
      <div className="pagination">
        <button onClick={handlePrev} className="pagination-button">
          Prev
        </button>
        <p>{`${currentPage}/${totalPage}`}</p>
        <button onClick={handleNext} className="pagination-button">
          Next
        </button>
      </div>
    );
  }
}
