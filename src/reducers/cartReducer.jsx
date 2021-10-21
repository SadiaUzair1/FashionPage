import { cartObject } from './initialStates'

export const cartReducer = (state = cartObject, action) => {
  switch (action.type) {
    case 123:
      return {
        ...state,
        sizeId: action.type,
        count: state.count + 1
      }
    case 234:
      return {
        ...state,
        sizeId: action.type,
        count: state.count + 1
      }
    case 345:
      return {
        ...state,
        sizeId: action.type,
        count: state.count + 1
      }
    case 456:
      return {
        ...state,
        sizeId: action.type,
        count: state.count + 1
      }
    case 'red':
      return {
        ...state,
        colorId: action.type,
        count: state.count + 1
      }
    case 'black':
      return {
        ...state,
        colorId: action.type,
        count: state.count + 1
      }
    case 'orange':
      return {
        ...state,
        colorId: action.type,
        count: state.count + 1
      }
    case 'blue':
      return {
        ...state,
        colorId: action.type,
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
  }
  return state
}
