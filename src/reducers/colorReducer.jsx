import { product } from './initialStates'

export const colorReducer = (state = product, action) => {
  Array.from({ length: product.sizes.length }, (v, i) => {
    if (product.sizes[i].id == action) {
      return {
        ...state,
        type: product.sizes[i].colors
      }
    }
  })
  return state
}
