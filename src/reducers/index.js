import { combineReducers } from 'redux'
import characters from './characters'
import locations from './locations'
import location from './location'
import episodes from './episodes'
import currentEpisode from './currentEpisode'

export default combineReducers({
    characters,
    locations,
    location,
    episodes,
    currentEpisode
})