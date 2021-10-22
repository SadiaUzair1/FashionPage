import { product } from './initialStates'

export const itemReducer = (state = product, action) => {
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

    case 'decreaseItemQuantity':
      return {
        ...state,
        sizes: state.sizes.map(el =>
          el.id === action.payload.sizeId
            ? {
                ...el,
                colors: el.colors.map(el1 =>
                  el1.name === action.payload.colorId
                    ? { ...el1, quantity: el1.quantity - action.payload.quantity }
                    : el1
                )
              }
            : el
        )
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
