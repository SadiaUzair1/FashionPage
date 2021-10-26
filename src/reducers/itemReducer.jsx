import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
  let sizeIndex = 0
  let colorIndex = 0
  let size = [...state.sizes]

  switch (action.type) {
    case 'image':
      return {
        ...state,
        type: product.images[action.payload].url
      }

    case 'decreaseItemQuantity':
      sizeIndex = state.sizes.findIndex(size => size.id === action.payload.sizeId)
      colorIndex = state.sizes[sizeIndex].colors.findIndex(
        color => color.name === action.payload.colorId
      )
      console.log(size[sizeIndex].colors[colorIndex].quantity - action.payload.quantity)
      size[sizeIndex].colors[colorIndex].quantity -= action.payload.quantity
      return {
        ...state,
        sizes: size
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
