import { useSelector } from 'react-redux'

export const ChatMessages = () => {
  const chat = useSelector(state => state.chatReducer)
  return (
    <div>
      {Array.from({ length: chat.chat.length }, (v, i) => (
        <div key={i}>
          <p>
            {'.'} {chat.chat[i].chat}
          </p>
        </div>
      ))}
    </div>
  )
}
