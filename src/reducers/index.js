import { combineReducers } from 'redux'

import { clothReducer } from './clothReducer'
import { cartReducer } from './cartReducer'

export default combineReducers({
  clothReducer: clothReducer,
  cartReducer: cartReducer
})
