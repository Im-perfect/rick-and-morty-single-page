import React, { Component } from "react";
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/characters" exact component={CharacterList} />
      </div>
    );
  }
}
