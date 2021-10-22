import { combineReducers } from 'redux'

import { itemReducer } from './itemReducer'
import { cartReducer } from './cartReducer'
import { chatReducer } from './chatReducer'

export default combineReducers({
  itemReducer: itemReducer,
  cartReducer: cartReducer,
  chatReducer: chatReducer
})
