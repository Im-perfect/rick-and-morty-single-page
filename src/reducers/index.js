import { combineReducers } from 'redux'
import characters from './characters'
import locations from './locations'

export default combineReducers({
    characters,
    locations
})