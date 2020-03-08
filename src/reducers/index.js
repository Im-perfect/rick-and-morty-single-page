import { combineReducers } from 'redux'
import info from './info'
import characters from './characters'
import locations from './locations'
import location from './location'
import episodes from './episodes'
import currentEpisode from './currentEpisode'
import dimensions from './dimensions'

export default combineReducers({
    info,
    characters,
    locations,
    location,
    episodes,
    currentEpisode,
    dimensions
})