import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from './Home'
import DimensionList from "./DimensionList";
import DimensionDetails from './DimensionDetails'
import LocationList from "./LocationList";
import LocationDetails from './LocationDetails'
import EpisodeList from "./EpisodeList";
import EpisodeDetails from './EpisodeDetails'
import CharacterList from "./CharacterList";

export default class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/dimensions" exact component={DimensionList} />
        <Route path="/dimensions/:dimensionName" exact component={DimensionDetails} />
        <Route path="/locations" exact component={LocationList} />
        <Route path="/locations/:locationId" exact component={LocationDetails} />
        <Route path="/episodes" exact component={EpisodeList} />
        <Route path="/episodes/:episodeId" exact component={EpisodeDetails} />
        <Route path="/characters" exact component={CharacterList} />
      </div>
    );
  }
}
