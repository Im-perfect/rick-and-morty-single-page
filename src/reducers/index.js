import { combineReducers } from 'redux'
import characters from './characters'
import locations from './locations'
import location from './location'

export default combineReducers({
    characters,
    locations,
    location
})