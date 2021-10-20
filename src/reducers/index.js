import { combineReducers } from 'redux'

import { clothReducer } from './clothReducer'
import { itemDetails } from './initialStates'

export default combineReducers({
  clothReducer: clothReducer,
  itemDetails: itemDetails
})
