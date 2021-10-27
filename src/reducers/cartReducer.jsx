import * as actionTypes from 'helpers'
import { cartObject } from './initialStates'

export const cartReducer = (state = cartObject, action) => {
  switch (action.type) {
    case actionTypes.SIZE:
      return {
        ...state,
        sizeId: action.payload,
        count: state.count + 1
      }

    case actionTypes.COLOR:
      return {
        ...state,
        colorId: action.payload,
        count: state.count + 1
      }

    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
        count: state.count + 1
      }

    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - 1,
        count: state.count + 1
      }

    case actionTypes.RESET_QUANTITY:
      return {
        ...state,
        quantity: action.payload
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...cartObject,
        quantity: 0,
        count: state.count + 1
      }
  }
  return state
}
