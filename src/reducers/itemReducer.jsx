import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
  console.log(state, action.payload)
  switch (action.type) {
    case 0:
      return {
        ...state,
        type: product.images[0].url
      }
    case 1:
      return {
        ...state,
        type: product.images[1].url
      }
    case 2:
      return {
        ...state,
        type: product.images[2].url
      }
    case 3:
      return {
        ...state,
        type: product.images[3].url
      }
    case 4:
      return {
        ...state,
        type: product.images[4].url
      }
    case 'cart':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            sizeId: action.payload.sizeId,
            colorId: action.payload.colorId,
            quantity: action.payload.quantity
          }
        ]
      }
    case 'remove':
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.sizeId !== action.payload)
      }
    default:
      return state
  }
}
