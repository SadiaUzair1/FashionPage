import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
  switch (action.type) {
    case 'image':
      return {
        ...state,
        type: product.images[action.payload].url
      }

    case 'decreaseItemQuantity':
      console.log(state)
      return {
        ...state,
        sizes: [
          ...state.sizes,
          (state.sizes[state.sizes.findIndex(size => size.id === action.payload.sizeId)].colors[
            state.sizes[
              state.sizes.findIndex(size => size.id === action.payload.sizeId)
            ].colors.findIndex(color => color.name === action.payload.colorId)
          ].quantity -= action.payload.quantity)
        ]
      }

    case 'add':
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

    case 'resetCart':
      return {
        ...state,
        cart: product.cart
      }

    default:
      return state
  }
}
