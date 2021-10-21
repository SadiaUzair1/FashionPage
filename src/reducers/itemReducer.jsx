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

    default:
      return state
  }
}
