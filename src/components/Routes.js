import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from './Home'
import DimensionList from "./dimension/DimensionList";
import DimensionDetails from './dimension/DimensionDetails'
import LocationList from "./location/LocationList";
import LocationDetails from './location/LocationDetails'
import EpisodeList from "./episode/EpisodeList";
import EpisodeDetails from './episode/EpisodeDetails'
import CharacterList from "./character/CharacterList";

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
