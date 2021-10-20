import { combineReducers } from 'redux'

import { clothReducer } from './clothReducer'
import { colorReducer } from './colorReducer'

export default combineReducers({
  clothReducer: clothReducer,
  colorReducer: colorReducer
})
