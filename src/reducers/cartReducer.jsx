import { cartObject } from './initialStates'

export const cartReducer = (state = cartObject, action) => {
  switch (action.type) {
    case 'size':
      return {
        ...state,
        sizeId: action.payload,
        count: state.count + 1
      }

    case 'color':
      return {
        ...state,
        colorId: action.payload,
        count: state.count + 1
      }

    case 'increaseQuantity':
      return {
        ...state,
        quantity: state.quantity + 1,
        count: state.count + 1
      }

    case 'decreaseQuantity':
      return {
        ...state,
        quantity: state.quantity - 1,
        count: state.count + 1
      }

    case 'resetQuantity':
      return {
        ...state,
        quantity: action.payload
      }

    case 'reset':
      return {
        ...state,
        quantity: 0,
        colorId: '',
        sizeId: 0,
        count: state.count + 1
      }
  }
  return state
}
