import React, { Component } from "react";
import { Route } from "react-router-dom";
import DimensionList from "./DimensionList";
import LocationList from "./LocationList";
import LocationDetails from './LocationDetails'
import EpisodeList from "./EpisodeList";
import CharacterList from "./CharacterList";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/dimensions" exact component={DimensionList} />
        <Route path="/locations" exact component={LocationList} />
        <Route path="/locations/:locationId" exact component={LocationDetails} />
        <Route path="/episodes" exact component={EpisodeList} />
        <Route path="/characters" exact component={CharacterList} />
      </div>
    );
  }
}
