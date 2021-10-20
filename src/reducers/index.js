import { combineReducers } from 'redux'

import { clothReducer } from './clothReducer'

export default combineReducers({
  clothReducer: clothReducer
})
