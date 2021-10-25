import { useSelector } from 'react-redux'

export const ChatMessages = () => {
  const chats = useSelector(state => state.chatReducer.chat)

  return (
    <div>
      {chats.map((chat, i) => (
        <div key={i}>
          <p>
            {'.'} {chat.chat}
          </p>
        </div>
      ))}
    </div>
  )
}
