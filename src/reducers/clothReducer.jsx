import * as initialState from './initialStates'
import { clothChoices } from './initialStates'

export const clothReducer = (state = initialState.renderCloth, action) => {
  // console.log(state)
  switch (action.type) {
    case 0:
      return {
        ...state,
        clothImage: clothChoices.image0
      }
    case 1:
      return {
        ...state,
        clothImage: clothChoices.image1
      }
    case 2:
      return {
        ...state,
        clothImage: clothChoices.image2
      }
    case 3:
      return {
        ...state,
        clothImage: clothChoices.image3
      }
    case 4:
      return {
        ...state,
        clothImage: clothChoices.image4
      }

    default:
      return state
  }
}
