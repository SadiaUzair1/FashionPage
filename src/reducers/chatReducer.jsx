import { chat } from './initialStates'

export const chatReducer = (state = chat, action) => {
  switch (action.type) {
    case 'chat':
      return {
        ...state,
        chat: [...state.chat, { chat: action.payload }]
      }

    default:
      return state
  }
}
