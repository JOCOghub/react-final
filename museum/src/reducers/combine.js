import { combineReducers } from 'redux'
import museums from './MuseumsReducer'
import paintings from './PaintingsReducer'

export default combineReducers({
  // key value pairs, they turned yellow from blue for some reason 
  museums,
  paintings
})