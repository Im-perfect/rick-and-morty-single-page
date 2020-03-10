import React, { Component } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions/character";
import { loadingMsg } from "../constants";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";

export class CharacterList extends Component {
  state = {
    currentPage: 1
  };

  handlePrev = () => {
    const page = this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;
    this.props.getCharacters(page);

    this.setState({
      currentPage: page
    });
  };

  handleNext = () => {
    const page =
      this.state.currentPage === this.props.info.pages
        ? this.props.info.pages
        : this.state.currentPage + 1;
    this.props.getCharacters(page);

    this.setState({
      currentPage: page
    });
  };

  componentDidMount = () => {
    this.props.getCharacters(this.state.currentPage);
  };

  render() {
    if (!this.props.characters) return loadingMsg;
    return (
      <div>
        <div className="card-container">
          {this.props.characters.map(character => (
            <div className="card-wrapper" key={character.id}>
              <CharacterCard info={character} />
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

const mapStateToProps = ({ characters, info }) => ({ characters, info });

const mapDispatchToProps = { getCharacters };

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
