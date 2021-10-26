import * as actionTypes from 'helpers'
import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
  let size = 0
  let color = 0
  let sizes = [...state.sizes]

  switch (action.type) {
    case actionTypes.IMAGE_TYPE:
      return {
        ...state,
        type: product.images[action.payload].url
      }

    case actionTypes.DECREASE_ITEM_QUANTITY:
      size = sizes.find(size => size.id === action.payload.sizeId)
      color = [...size.colors].find(color => color.name === action.payload.colorId)
      color.quantity -= action.payload.quantity

      return {
        ...state,
        sizes: sizes
      }

    case actionTypes.ADD:
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

    case actionTypes.REMOVE:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.sizeId !== action.payload)
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
