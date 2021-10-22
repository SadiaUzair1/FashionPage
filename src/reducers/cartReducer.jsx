import { cartObject } from './initialStates'

export const cartReducer = (state = cartObject, action) => {
  switch (action.type) {
    case 'size':
      console.log('state', state, 'payload', action.payload, 'type', action.type)
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

    case '+':
      return {
        ...state,
        quantity: state.quantity + 1,
        count: state.count + 1
      }

    case '-':
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
