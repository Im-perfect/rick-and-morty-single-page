import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <NavItem>
          <NavItemLink to="/" exact={true}>
            Home
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/dimensions">Dimensions</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/locations">Locations</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/episodes">Episodes</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/characters">Characters</NavItemLink>
        </NavItem>
      </NavContainer>
    );
  }
}

const NavContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  border-bottom: 1px solid transparent;
  cursor: pointer;
  font-family: "Carrois Gothic", sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  text-transform: uppercase;
  padding: 0 12px;

  &:not(:last-child) {
    border-right: 1px solid #cccccc;
  }

  &:hover a {
    color: #111111;
  }

  @media (max-width: 680px) {
    font-size: 14px;
  }

  @media (max-width: 560px) {
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
    border-right: 1px solid #cccccc;
  }
`;

const activeClassName = "active";
const NavItemLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  text-decoration: none;
  color: #666666;

  &.${activeClassName} {
    border-bottom: 1px solid #111111;
    color: #ce312d;
    pointer-events: none;
  }
`;
