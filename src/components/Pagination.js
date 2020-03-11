import React, { Component } from "react";
import styled from "styled-components";

export default class Pagination extends Component {
  render() {
    const { currentPage, totalPage, handlePrev, handleNext } = this.props;
    return (
      <PaginationContainer>
        <Button onClick={handlePrev}>Prev</Button>
        <p>{`${currentPage}/${totalPage}`}</p>
        <Button onClick={handleNext}>Next</Button>
      </PaginationContainer>
    );
  }
}

const PaginationContainer = styled.div`
  font-family: "Carrois Gothic", sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  text-transform: uppercase;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  text-transform: uppercase;
  border: 1px solid #000000;
  cursor: pointer;
  margin: 0 8px;
  padding: 3px 6px;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;
