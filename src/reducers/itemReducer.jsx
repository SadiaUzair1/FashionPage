import * as actionTypes from 'helpers'
import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
  let color = 0
  let colors = 0
  let sizes = [...state.sizes]
  let cart = [...state.cart]
  let sizeIndex = 0

  switch (action.type) {
    case actionTypes.IMAGE_TYPE:
      return {
        ...state,
        type: product.images[action.payload].url
      }

    case actionTypes.DECREASE_ITEM_QUANTITY:
      sizeIndex = sizes.findIndex(size => size.id === action.payload.sizeId)
      colors = [...sizes[sizeIndex].colors]
      color = colors.find(color => color.name === action.payload.colorId)
      color.quantity -= action.payload.quantity
      sizes[sizeIndex].colors = colors
      return {
        ...state,
        sizes: sizes
      }

    case actionTypes.ADD:
      sizeIndex = state.cart.findIndex(size => size.sizeId === action.payload.sizeId)

      if (sizeIndex !== -1 && state.cart[sizeIndex].colorId === action.payload.colorId) {
        cart[sizeIndex].quantity += action.payload.quantity
        return {
          ...state,
          cart: cart
        }
      } else {
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
      }

    case actionTypes.REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          cartItem =>
            cartItem.colorId !== action.payload.colorId || cartItem.sizeId !== action.payload.sizeId
        )
      }

    case actionTypes.RESET_CART:
      return {
        ...state,
        cart: product.cart
      }

    default:
      return state
  }
}
