import { product } from './initialStates'

export const colorReducer = (state = product, action) => {
  return {
    ...state,
    sizeId: action,
    count: state.count + 1
  }
}
